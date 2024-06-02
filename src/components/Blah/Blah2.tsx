import React from 'react'

type Props = {}

const Blah2 = (props: Props) => {
    const myRefToChild = React.useRef<any>({});
    console.log('parent');
    const count = React.useRef({counting: 0})

    function handleClick(){
        myRefToChild.current.innerHTML = 'swapped';
        count.current.counting = count.current.counting + 1;
    }

  return (
    <div>
        <h1>Blah2, {count.current.counting}</h1>
        <button onClick={handleClick}>click</button>
        <hr />
        <Blah2Child ref={myRefToChild}/>
    </div>
  )
}

const Blah2Child: any = React.forwardRef((props: any, ref: any) => {
    console.log('child')

    return (
        <div ref={ref}>Blah2Child</div>
    )
})

export default Blah2