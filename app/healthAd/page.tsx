'use client'
import { db } from '@/lib/db';
import { UpdateMessages, createMessages, fetchChat } from '@/lib/server-actions';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';
import OpenAI from 'openai';
import React, { useEffect, useState } from 'react'

type Msges = {
    role: string,
    content: string
}


const HealthAdPage = () => {

    const cookie = parseCookies()
    const chatId = cookie['chatId']
    const [userMsg, setUserMsg] = useState('');
    const [messages, SetMessages] = useState<Msges[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
            const fetchResp = async() => {
                const chatHistoryFromDb = await fetchChat()
                console.log(chatHistoryFromDb)
            }
            fetchResp()
            // console.log(fetchResp)
    },[])

    const handleUserMsg = async() => {
        setIsLoading(true);
        SetMessages((prev: any) => [
            ...prev,
            {role: 'user', content: userMsg}
        ])

        if(!chatId){
            const  resp = await createMessages({role: 'user',content: userMsg})

            console.log("response one :",resp?.id, resp)
            if(resp){
                setCookie(null, 'chatId', resp?.id!)
            }
        }

        const  resp2 = await UpdateMessages({ id: chatId, role: 'user',content:userMsg})
        console.log("response two :",resp2)
        
        

        const gptResp = await axios.post('/api/gpt', {prompt: userMsg, messages:messages})
        console.log(gptResp)
        SetMessages((prev: any) => [
            ...prev,
            { role: 'system', content: gptResp.data},
        ])

        const  resp3 = await UpdateMessages({ id: chatId, role: 'system',content:gptResp.data})
        console.log("response three :",resp3)
        setUserMsg('')
        setIsLoading(false)
    }
    // console.log(messages)
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[90%] w-[50%] bg-slate-50 rounded-md shadow-md relative' >

        <div className='h-full w-full px-8 py-4 bg-slate-300 overflow-y-auto'>
            {
           messages.map((message, idx) => (
            <div key={idx} 
            className={cn('py-1 px-2 rounded-lg', message.role === 'system' ? 'bg-green-300' : 'bg-teal-500')}
            >
                {message.content}
            </div>
           ))
            }
        </div>

        <div className='absolute bottom-0 flex w-full gap-2'>
           <input type="text" className='p-2 bg-slate-50 text-black ring-0 !outline-offset-0 focus:!outline-offset-0 !ring-offset-0 focus:!ring-0 focus:!ring-offset-0 rounded-md w-full' 
        onChange={(e) => setUserMsg(e.target.value)}
        />
        <button onClick={handleUserMsg} className='p-2 rounded-md bg-black'>
            send
        </button> 
        </div>
        
      </div>
    </div>
  )
}

export default HealthAdPage
