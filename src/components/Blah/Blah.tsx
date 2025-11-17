import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import OpenAI from "openai";
// @ts-ignore

type Props = any;

const client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });


const Blah: React.FC<any> = (props: Props) => {

    async function handler(message: string) {
        const reply = await client.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [{ role: "user", content: message }]
        });

        console.log('reply: ', reply);

        return reply;
    }

    useEffect(() => {
        handler('Hello, how are you?');
    }, []);

    return <div>
        <h1>Hello</h1>
    </div>;
};

export default Blah;
