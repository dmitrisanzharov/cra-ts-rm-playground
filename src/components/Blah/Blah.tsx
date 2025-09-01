import React from 'react';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

 
    const count = React.useRef(0);
    const elementRef = React.useRef<HTMLDivElement>(null);

    const [stateCount, setStateCount] = React.useState(0);


    function myFn() {
        count.current = count.current + 1;
        console.log(count.current);
        if(elementRef.current){
            elementRef.current.innerText = count.current.toString();
        }
        
    }

    return <div>
        <h1>Hello</h1>
        <div ref={elementRef}>0</div>
        <button onClick={myFn}>Increment</button>
    </div>;
};  

export default Blah;
