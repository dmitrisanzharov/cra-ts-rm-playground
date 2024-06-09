import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {

    console.log('component did re-render');

    const [reRender, setRerender] = React.useState(0);

   const countViaUseRef = React.useRef(0);
   const myHtml = React.useRef<any>();

   function handleCountViaUseRef(){
    countViaUseRef.current = countViaUseRef.current + 1;
    myHtml.current.innerHTML = countViaUseRef.current;
    console.log('countViaUseRef', countViaUseRef);
   }

   function addUp(){
    countViaUseRef.current = countViaUseRef.current + 5;
   }

   React.useEffect(() => {
    console.log('countViaUseRef inside of useEffect', countViaUseRef.current)
   }, [countViaUseRef.current]);

    return <div>
        <h1 ref={myHtml}>{countViaUseRef.current}</h1>
        <button onClick={handleCountViaUseRef}>increase countViaUseRef</button>
        <hr />
        <button onClick={addUp}>add 5 to countViaUseRef</button>
        <hr />
        <h1>number of re-renders: {reRender}</h1>
        <button onClick={() => setRerender(reRender+1)}>reRender</button>
    </div>;
};

export default Blah;
