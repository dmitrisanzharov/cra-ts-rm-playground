
import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);
    // const [count1, setCount1] = React.useState(0);
    // const [count2, setCount2] = React.useState(0);

    console.log('parent');

    React.useEffect(() => {
        // if(count === 2){
        //     // re-render 1 child
        //     setCount1(count1 + 1)
        // }

        // if(count === 4){
        //     // re-render 2 children
        //     setCount1(count1 + 1);
        //     setCount2(count2 + 1);
        // }
    }, [count]);

    return <div>
        <h1>Count is: {count}</h1>
        <button onClick={()=> setCount(count+1)}>inc</button>
        <hr />
        <Child1 />
        <hr />
        <Child2 />
    </div>;
};

export default Blah;
