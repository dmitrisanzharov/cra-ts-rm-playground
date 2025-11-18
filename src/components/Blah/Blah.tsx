import React, { useEffect } from 'react';
import { Box, Skeleton, Typography, Button } from '@mui/material';
import Groq from 'groq-sdk';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    
    const client2 = new Groq({
        apiKey: process.env.REACT_APP_GROQ_API_KEY,
        dangerouslyAllowBrowser: true
    });
    
    console.log('client2: ', process.env.REACT_APP_GROQ_API_KEY);

    async function handler(message: string) {
        const reply = await client2.chat.completions.create({
            model: 'llama-3.1-8b-instant',
            messages: [
                {
                    role: 'system',
                    content:
                        'You are an expert that only knows the following mapping:\n- red → apple\n- yellow → banana\n- green → kale\n\nWhen the user gives you a color, reply ONLY with the corresponding item. \nIf the color is not in the mapping, reply "I don\'t know".'
                },
                { role: 'user', content: message }
            ]
        });
        console.log('🚀 ~ handler ~ reply:', reply);
        console.log('reply: ', reply?.choices?.[0]?.message?.content);

        return reply;
    }

    return (
        <div>
            <h1>Hello</h1>
            <Button onClick={() => handler('yellow')}>request</Button>
        </div>
    );
};

export default Blah;
