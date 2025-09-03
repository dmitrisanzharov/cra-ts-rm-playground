import React from 'react'

type Props = {}

const MyChild = (props: Props) => {
  return (
    <div>MyChild</div>
  )
}

export default MyChild


function delayForDemo(component: any){
    return new Promise(resolve => {
        setTimeout(resolve, 4000);
    }).then(()=> {
        console.log('delayForDemo resolved', component);
        return component;
    })
}

delayForDemo('omg');