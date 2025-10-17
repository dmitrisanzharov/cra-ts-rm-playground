import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

let a = 1;

const Blah: React.FC<any> = (props: Props) => {

    a = 2;
    a = 3;

    console.log('re-render');

    const [count, setCount] = React.useState(0);
    // setCount(0);

React.useEffect(() => {
    console.log('useEffect parent');
    setCount(prev => prev + 2);
    setCount(prev => prev + 5);
    setCount(prev => prev + 3);
  }, []);

    // React.useEffect(() => {
    //     setCount(0);
    //     console.log('mah man')
    // }, []);


    return <div>
        <h1>Hello {count}</h1>
        {/* <button onClick={}>Increment</button> */}
        <Child a={a} />
    </div>;
};

export default Blah;


const Child: any = ({ a }: any) => {
    console.log('a render');

    React.useEffect(() => {
    console.log('useEffect child');
  }, []);

      React.useEffect(() => {
    console.log('useEffect child');
  }, []);
    return <div>Child {a}</div>;
}
