import React, { useState } from 'react';
import { consoleMe } from '../../helper/consoleMe';

type Props = any;


const Blah: React.FC<any> = (props: Props) => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log(newCount);
    };

    const handleConsoleMe = () => {
        consoleMe(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <h2>Hello</h2>
            <button onClick={handleIncrement}>
                Count: {count}
            </button>
            <div style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a string"
                />
                <button onClick={handleConsoleMe} style={{ marginLeft: '10px' }}>
                    console me
                </button>
            </div>
        </div>
    );
};

export default Blah;
