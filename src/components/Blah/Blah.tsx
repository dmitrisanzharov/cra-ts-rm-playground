import React from 'react';

type Props = any;

let a = 1;


const Blah: React.FC<any> = (props: Props) => {


   console.log('parent mounted');


   React.useEffect(() => {
       console.log('parent useEffect ran');
   }, []);


   return <div>
       <h1>Hello</h1>
       <Child1 />
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
