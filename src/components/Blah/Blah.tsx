import React from 'react';


type Props = any;


let a = 1;




const Blah: React.FC<any> = (props: Props) => {

    a = 2;

    a = 3;


   return <div>
       <h1>Hello</h1>
       <button onClick={() => {
        console.log('a', a)
        a = a + 1
       }}>change a</button>
       <Child1 a={a}  />
   </div>;
};


export default Blah;


function Child1(props: any) {


    React.useEffect(() => {
        console.log('child1 useEffect re-rendered', props.a);
    }, [props.a]);


   console.log('child re-rendered');
   return <div>child1</div>
}
