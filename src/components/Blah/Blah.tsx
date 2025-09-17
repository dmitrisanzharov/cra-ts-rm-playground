import React from 'react';


type Props = any;


const Blah: React.FC<any> = (props: Props) => {

//   const [count, setCount] = React.useState(0);
  

//   React.useEffect(() => {
//     setCount(prev => prev + 2);
//     setCount(prev => prev + 5);
//     setCount(prev => prev + 3);
//   }, []);

  React.useEffect(() => {
    console.log('SECOND');
  }, []);

   return <div>
       <h1>Hello</h1>
       <Child1 />
       <Child1 />
   </div>;
};

export default Blah;




function Child1(props: any) {

React.useEffect(() => {
    console.log('FIRST');
}, []);
   
   return <div>child1</div>
}

