import React, { useState } from 'react';
import { consoleMe } from '../../helper/consoleMe';

const Blah: React.FC = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        consoleMe(newCount.toString());
    };

    const handleConsoleMe = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            consoleMe(trimmedValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleConsoleMe();
        }
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
                    onKeyDown={handleKeyDown}
                    placeholder="Type a string"
                    aria-label="Text input for console logging"
                />
                <button onClick={handleConsoleMe} style={{ marginLeft: '10px' }}>
                    console me
                </button>
            </div>
        </div>
    );
};

export default Blah;
