import React from 'react';
// @ts-ignore

type Props = any;


const Child = React.forwardRef((props: any, ref: any) => {
    console.log("ref: ", ref);


    React.useEffect(() => {
        if (ref.ref1.current) {
            ref.ref1.current.style.color = 'red';
        }

        if (ref.ref2.current) {
            ref.ref2.current.style.color = 'green';
        }
    }, []);

    return <div>
        <div>This is child!</div>
        <input {...props} ref={ref.ref1} />
        <h1 ref={ref.ref2}>ref2</h1>
    </div>;
})

const Blah: React.FC<any> = (props: Props) => {

    const childRef = React.useRef<any>(null);
    const childRef2 = React.useRef<any>(null);

    return <div>
        <div>This is parent!</div>
        <hr />
        <Child {...{ name: 'helloDmitri', defaultValue: 'omg it worked' }} ref={{ ref1: childRef, ref2: childRef2 } as any} />
    </div>;
};

export default Blah;



