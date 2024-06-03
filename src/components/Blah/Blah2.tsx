import React from 'react'

type Props = {}

const Blah2 = (props: Props) => {
    const myRefToChild = React.useRef<any>({});
    console.log('parent');
    const count = React.useRef({counting: 0});
    const myRef2 = React.useRef<any>({});

    function handleClick(){
        myRefToChild.current.innerHTML = 'swapped';

        count.current.counting = count.current.counting + 1;
        myRef2.current.innerHTML = count.current.counting;

    }

  return (
    <div>
        <h1>Blah2, {count.current.counting}</h1>
        <button onClick={handleClick}>click</button>
        <hr />
        <Blah2Child ref={{ref1: myRefToChild, ref2: myRef2}}/>
    </div>
  )
}

const Blah2Child: any = React.forwardRef((props: any, ref: any) => {
    console.log('child')

    return (
        <div>
            <div ref={ref.ref1}>Blah2Child</div>
            <div ref={ref.ref2}>nothing</div>
        </div>
    )
})

export default Blah2