import React from 'react'
import ReusableContextWrapper from 'src/components/ReusableContext/ReusableContext';
import BlockTwoMainComp1 from 'src/components/ReusableContext/BlockTwoMainComp1';

type Props = {}

const BlockTwoMain = (props: Props) => {
  return (
    <ReusableContextWrapper name='blahBlah'>
        <hr />
        <BlockTwoMainComp1 />
    </ReusableContextWrapper>
  )
}

export default BlockTwoMain