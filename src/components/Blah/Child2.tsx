import React from 'react'

type Props = {}

const Child2 = React.memo((props: any) => {
    console.log('child2');
    console.log('============================');
  return (
    <div>Child2</div>
  )
})

export default Child2