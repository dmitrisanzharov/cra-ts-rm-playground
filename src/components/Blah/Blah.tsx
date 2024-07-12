import React from 'react';
import {useMyStuff} from './hooks';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    const  myStuff = useMyStuff();
    console.log("myStuff: ", myStuff);
    // console.log('hook', useMyStuff());

    const myStuff2 = useMyStuff();
    console.log("myStuff2: ", myStuff2);

    
     return <div>
     <h1>Parent component, count is: {myStuff.number}</h1>
     <button onClick={myStuff.handleClick}>inc</button>
     <hr />
     </div>;
    };

export default Blah;



