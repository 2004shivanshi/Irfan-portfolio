// // /api/chatbot.js

// import { NextApiRequest, NextApiResponse } from 'next';
// import OpenAI from 'openai';

// // Set your OpenAI API key, make sure to keep it secure.
// export const openai = new OpenAI({
//     apiKey: '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', // This is the default and can be omitted
//   });
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   const { message } = req.body;

//   // Generate a response using the OpenAI GPT-3 model.
//   const response = await openai.chat.completions.create({
//     messages: [{"role": "system", "content": "You are a helpful assistant."},
//         {"role": "user", "content": "Who won the world series in 2020?"},
//         {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//         {"role": "user", "content": "Where was it played?"}],
//     model: "gpt-3.5-turbo",
//   });

//   // Extract the generated message from the response.
//   const generatedMessage = response.choices[0]

//   // Send the generated message back to the user.
//   res.status(200).json({ message: generatedMessage });
// }

import { OpenAI} from 'openai';

export const runtime= "nodejs"

const  openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
      });
export async function POST(req: Request, res:Response ){
    const { prompt, messages } = await req.json();
    // let prompt="how do i gain weight, im to skinny even when i eat so much"
    console.log(prompt, messages)
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'system',
                content: `you are a personalized health advisor, you have a human persona and your task will be to communicated and take relevent information if you are curius about symtoms and what your patiences daily health routine is and memorize previews messages and give them proper response `,
            },
             ...messages,
             
            { role: 'system', content: prompt}
                        
        ],
    });
    return new Response(JSON.stringify(response.choices[0].message.content))
}