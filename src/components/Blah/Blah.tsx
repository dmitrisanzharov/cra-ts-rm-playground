import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Groq from 'groq-sdk';
// @ts-ignore

type Props = any;

const groqClient = new Groq({
    apiKey: process.env.REACT_APP_GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});

const Blah: React.FC<any> = (props: Props) => {
    const [replyState, setReplyState] = React.useState<string | null>('');

    async function handleGroqRequest() {
        const reply = await groqClient.chat.completions.create({
            model: 'llama-3.1-8b-instant',
            messages: [
                {
                    role: 'system',
                    content:
                        'Here are the mapping for user vs reply... user red, you apple; user blue, you plum; user green, you kale; user yellow, you banana... only reply with the fruit.'
                },
                { role: 'user', content: 'red' }
            ]
        });
        console.log('GROQ reply:', reply);
        setReplyState(reply.choices[0].message.content);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleGroqRequest}>Click me</button>
            {replyState && <p>{replyState}</p>}
        </div>
    );
};

export default Blah;
