import React from 'react'

type Props = {}

const Foo = (props: Props) => {

    const childHtml = React.useRef<any>();
    console.log("childHtml: ", childHtml.current);
    

    if(childHtml.current){
        childHtml.current.style.color = 'red';
    }

    const myProps = {
        name: 'Dmitri',
        position: 'alalala'
    }
    
  return (
    <div>
        <h1>Parent</h1>
        <Child {...myProps} ref={childHtml}  />
    </div>
  )
}


const Child: any = React.forwardRef((props: any, ref: any) => {

    console.log('test', props);
    console.log('ref', ref);
    




    return <div>
        <hr />
        <h1 ref={ref}>Child</h1>
        <ul>
            <li>{props.name}</li>
            <li>{props.position}</li>
        </ul>
    </div>
})

export default Foo