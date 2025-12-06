import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { contextString } from './contextString';
import Groq from 'groq-sdk';
// @ts-ignore

type Props = any;

const aiClient = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

const Blah: React.FC<any> = (props: Props) => {
    async function handleAiPrompt() {
        const reply = await aiClient.chat.completions.create({
            model: 'llama-3.1-8b-instant',
            messages: [
                {
                    role: 'system',
                    content: contextString,                       
                },
                {
                    role: 'user',
                    content: 'yellow, red'
                }
            ]
        });
        console.log(reply?.choices?.[0]?.message?.content);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleAiPrompt}>Prompt</button>
        </div>
    );
};

export default Blah;
