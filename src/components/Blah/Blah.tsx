import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import Groq from 'groq-sdk';

// grok stuff

const apiKeyFromEnv = process.env.REACT_APP_GROQ_API_KEY;
console.log('🚀 ~ apiKeyFromEnv:', apiKeyFromEnv);

const grokClient = new Groq({
    apiKey: apiKeyFromEnv,
    dangerouslyAllowBrowser: true
});

async function handler(message: string) {
    const reply = await grokClient.chat.completions.create({
        model: 'qwen/qwen3-32b',
        messages: [
            {
                role: 'system',
                content:
                    'user says: A, you say: Apple... user says: B, you say: Banana... user says anything else, you say: I dunno...'
            },
            { role: 'user', content: message }
        ]
    });
    console.log('🚀 ~ handler ~ reply:', reply);
    console.log('reply: ', reply?.choices?.[0]?.message?.content);

    return reply;
}

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    console.log('grokClient', grokClient);

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => handler('b')}>post message</button>
        </div>
    );
};

export default Blah;
