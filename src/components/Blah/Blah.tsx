import React from 'react';


type Props = any;


let a = 1;


const Blah: React.FC<any> = (props: Props) => {

    console.log('Comp1');

    React.useEffect(() => {
        console.log('in useEffect Comp1');
    }, []);

    return <div>
        <h1>Hello</h1>
        <Child1 />
    </div>;
};


export default Blah;


function Child1(props: any) {


    console.log('Comp2');

    React.useEffect(() => {
        console.log('in useEffect Comp2');
    }, []);
    return <div>child1</div>
}
