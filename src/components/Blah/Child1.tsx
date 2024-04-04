import React from 'react'

type Props = {}

const Child1 = React.memo((props: any) => {
    console.log('child1')
  return (
    <div>Child1</div>
  )
})

export default Child1