import React, { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import Groq from "groq-sdk";
// @ts-ignore

type Props = any;

// @ts-ignore
const aiClient = new Groq({
    apiKey: process.env.REACT_APP_GROK_KEY,
    dangerouslyAllowBrowser: true
} as any);

const myContext =
    "if they say 'red' you say apple, if they say 'yellow' you say banana, if they say 'green' you say cucumber... otherwise say 'please state color'";

async function testAi(message: string) {
    const reply = await aiClient.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
            { role: "system", content: myContext },
            { role: "user", content: message }
        ]
    });
    console.log("🚀 ~ handler ~ reply:", reply);
    console.log("reply: ", reply?.choices?.[0]?.message?.content);

    return reply;
}

const Blah: React.FC<any> = (props: Props) => {
    const [userInput, setUserInput] = React.useState("");

    return (
        <div>
            <h1>Hello</h1>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={() => testAi(userInput)}>Send to AI</button>
        </div>
    );
};

export default Blah;
