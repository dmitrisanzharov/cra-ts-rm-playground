import React from 'react'

type Props = {}

const Blah3 = (props: Props) => {

    const [re, setRe] = React.useState(0);
    const count = React.useRef(0);
    const myHtmlRef = React.useRef<any>({});


    function handleClick(){
        count.current = count.current + 1;
        console.log('count is: ', count.current);
        myHtmlRef.current.innerHTML = count.current;
    }

    console.log('did component re-render')

  return (
    <div>
        <div>no innerHTML: {count.current}</div>
        <div>with innerHTML: <span ref={myHtmlRef}>0</span></div>
        <button onClick={handleClick}>up</button>
        <hr />
        <button onClick={()=> setRe(re+1)}>re-render</button>
    </div>
  )
}

export default Blah3;