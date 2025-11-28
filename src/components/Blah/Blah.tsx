import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Groq from 'groq-sdk';
// @ts-ignore

type Props = any;

const clientAi = new Groq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

const Blah: React.FC<any> = (props: Props) => {

    async function pingGroq(){
        const reply = await clientAi.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: 'system',
                    content: 'map like this, if they say: red, you say apple... blue is plum... yellow is banana'
                },
                {
                    role: 'user',
                    content: 'blue'
                }
            ]
        })
        console.log("🚀 ~ pingGroq ~ reply:", reply?.choices?.[0]?.message?.content)
        
    }


    return (
        <div>
            <h1>Hello</h1>
            <button onClick={pingGroq}>Ping Groq</button>
        </div>
    );
};

export default Blah;
