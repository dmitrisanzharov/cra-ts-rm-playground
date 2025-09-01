import React from 'react';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    // const [count, setCount] = React.useState(0);

    const count = React.useRef(0)


    const htmlElement = React.useRef<HTMLDivElement>(null);
    console.log("htmlElement: ", htmlElement);

    // htmlElement.current.style.color = "red";


    React.useEffect(() => {
        if(htmlElement.current){
            htmlElement.current.style.color = "red";
        }
    }, []);

    React.useEffect(() => {
        console.log("Count changed: ", count);
    }, [count]);


    return <div>
        <h1 ref={htmlElement}>Hello</h1>
        <button onClick={() => count.current = count.current + 1}>Increment</button>
    </div>;
};  

export default Blah;
