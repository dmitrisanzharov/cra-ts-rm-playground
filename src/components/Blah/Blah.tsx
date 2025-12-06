import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Groq from 'groq-sdk';
// @ts-ignore

type Props = any;

const aiClient = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true  });

const Blah: React.FC<any> = (props: Props) => {

    async function handleAiPrompt(){
        const reply = await aiClient.chat.completions.create({
             model: "llama-3.1-8b-instant",
             messages: [
                 {
                     role: "system",
                     content: "if user says: dark color you respond with vegetables, if user says: light color you respond with fruits, if user says many colors in the prompt, just list mapping one after another, example, user says: 'black, white, blue', you reply with 'vegetables, fruits, vegetables', the prompt can have more than 3 colors"
                 },
                 {
                     role: "user",
                     content: "white, black, yellow, violet"
                 }
             ]
        })
        console.log(reply?.choices?.[0]?.message?.content);
    }

    return <div>
        <h1>Hello</h1>
        <button onClick={handleAiPrompt}>Prompt</button>
    </div>;
};

export default Blah;
