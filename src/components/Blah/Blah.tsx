import React from 'react';

type Props = any;

let a = 1;


const Blah: React.FC<any> = (props: Props) => {


    const [count, setCount] = React.useState(0);

    function changeCount() {
        setCount((prevCount) => prevCount + 12);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 2);

    }

    return <div>
        <h1>Hello</h1>
        <button onClick={changeCount}>Increment {count}</button>

    </div>;
};


export default Blah;




const Child1 = (props: any) => {


    console.log('child mounted');


    React.useEffect(() => {
        console.log('child useEffect ran');
    }, []);


    return <div>
        <h1>Child1</h1>
    </div>;
}
