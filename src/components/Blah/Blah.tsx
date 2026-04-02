import React, { useEffect } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const countRef = React.useRef(0);
    const htmlRef = React.useRef<HTMLDivElement>(null);

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (htmlRef.current) {
            htmlRef.current.style.color = 'red';
        }
    }, []);

    return (
        <div>
            <h1>Count {countRef.current}</h1>
            <h2>
                count bounded: <span ref={htmlRef}>0</span>
            </h2>
            <button
                onClick={() => {
                    countRef.current = countRef.current + 1;
                    if (htmlRef.current) {
                        htmlRef.current.innerText = countRef.current.toString();
                    }
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                re-render
            </button>
        </div>
    );
};

export default Blah;
