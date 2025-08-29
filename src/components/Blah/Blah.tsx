import React, { useMemo } from 'react';
import { useContextSelector } from "use-context-selector";
import Context5, { UserContext } from '../context5';

// @ts-ignore 

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
     console.log('============================');

    return <div>
        <h1>Hello</h1>
        <Context5>
            <Child1 />
            <Child2 />
            <Child3 />
        </Context5>
    </div>;
};

export default Blah;


const Child1 = React.memo((props: any) => {

    const name = useContextSelector(UserContext, v => v.name);
    console.log("name rerender: ", name);


    return <div>
        <h1>Child1</h1>
    </div>;
})

const Child2 = () => {

    const age  = useContextSelector(UserContext, v => v.age);
    console.log("age rerender: ", age);

    return <div>
        <h1>Child2</h1>
    </div>;
}

const Child3 = () => {

    console.log('child3');

    const changeAge = useContextSelector(UserContext, (v) => v.setAge);

    React.useEffect(() => {
        console.log("useEffect trigger");
        changeAge(25);
    }, [changeAge]);

    return <div>
        <h1>Child3</h1>
    </div>;
}
