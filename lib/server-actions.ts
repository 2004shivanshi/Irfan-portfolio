'use server'

import { useEffect, useRef } from "react"
import { db } from "./db"

type createMessagesProps = {
    role: string,
    content: string
}

type UpdateMessagesProps = {
    id: string
    role: string,
    content: string
}
 

export const createMessages = async({
    role,content
}: createMessagesProps) => {
    try {
        const resp2 = await db.chatHistory.create({
            data: {
                chat_history: {
                    create: {
                        role: role,
                        content: content
                    }
                }
            }
        })
        return resp2
    } catch (error) {
        console.log(error)
    }
    
}


export const UpdateMessages = async({
    id,role,content
}: UpdateMessagesProps) => {
    try {
        const resp2 = await db.chatHistory.update({
            where: {
                id
            },
            data: {
                chat_history: {
                    create: {
                        role: role,
                        content: content
                    }
                }
            }
        })
        return resp2
    } catch (error) {
        console.log(error)
    }
    
    
}

export const fetchChat = async() => {
    try {
        const resp2 = await db.chatHistory.findMany({
            include: {
                chat_history: true
            }
        })
        return resp2
    } catch (error) {
        console.log(error)
    }
    
    
}