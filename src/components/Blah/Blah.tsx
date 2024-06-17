import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [number, setNumber] = React.useState(1);

    const primitiveOne = 'hello';
    const myArr = React.useMemo(()=> ['a', 'b', 'c'], []);
    const myFunction1 = React.useCallback((arg: any) => {
        return arg
    }, [])


    return <div>
        <h1>Parent component, count is: {number}</h1>
        <button onClick={()=> setNumber(number+1)}>inc</button>
        <hr />
        <Child primitiveOne={primitiveOne} myArr={myArr} myFunction1={myFunction1} />
    </div>;
};


const Child: any = (props: any) => {

    console.log('============================');
    
    React.useEffect(() => {
        console.log('primitiveOne NO update')
    }, [props.primitiveOne]);

    React.useEffect(() => {
        console.log('myArr Updates')
    }, [props.myArr]);

    React.useEffect(()=> {
        console.log('function by itself UPDATES');
    }, [props.myFunction1])

    React.useEffect(()=> {
        console.log('function return primitive will NOT update');
    }, [props.myFunction1(1)])


    React.useEffect(()=> {
        console.log('function returning array will update');
    }, [props.myFunction1(['yo'])])
    
    

    return<>
        <h2>Child</h2>
    </>
}

export default Blah;
