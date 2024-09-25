import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const [count, setCount] = React.useState(0);
    const myRef = React.useRef(0);
    const myRefHTML = React.useRef<any>({});
    const myRefInput = React.useRef<any>(null);
    const myRefHTML2 = React.useRef<any>(null);


    if(myRefInput.current){
           myRefInput.current.style.color = 'red'
    }
 
    if(myRefHTML2.current){
        myRefHTML2.current.innerHTML = 'changed'
    }

    

    console.log(myRef.current);


    React.useEffect(() => {
        console.log('changed')
    }, [myRef.current]);

    return <div>
        <h1>Hello</h1>
        <h1>{count}</h1>
        <h2>{myRef.current}</h2>
        <h1 ref={myRefHTML}></h1>
        <button onClick={()=> {myRef.current = myRef.current + 1; console.log('myRefHTML', myRefHTML.current); myRefHTML.current.innerHTML = myRef?.current; setCount(count+1)}}>inc</button>
        <hr />
        <MyInput {...{type: 'text', placeholder: 'omg it worked'}} ref={{myRef1: myRefInput, myRef2: myRefHTML2}}/>
    </div>;
};



const MyInput: any = React.forwardRef((props: any, ref: any) => {

    console.log('ref', ref)

    return <>
        <h1 ref={ref.myRef2}>blah</h1>
        <input {...props} ref={ref.myRef1}/>
    </>
})

export default Blah;
