import React from 'react';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {


    const htmlElement = React.useRef<HTMLDivElement>(null);
    console.log("htmlElement: ", htmlElement);




    return <div>
        <h1 ref={htmlElement}>Hello</h1>
    </div>;
};

export default Blah;
