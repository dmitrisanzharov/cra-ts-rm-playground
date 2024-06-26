import React from 'react'

type Props = {}

const ReusableParent = (props: any) => {

    const someProp: any = 'child title';

    function clickMe(){
        console.log('hello')
    }

    const fooClone: any = React.cloneElement(props.children, {myProp1: someProp, myFn: clickMe})

  return (
    <div>
        {fooClone}
    </div>
  )
}

export default ReusableParent