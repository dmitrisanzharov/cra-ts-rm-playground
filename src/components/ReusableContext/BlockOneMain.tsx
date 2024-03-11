import React from 'react';
import ReusableContextWrapper from 'src/components/ReusableContext/ReusableContext'; 
import BlockOneMainComp1 from 'src/components/ReusableContext/BlockOneMainComp1';

type Props = {}

const BlockOneMain = (props: Props) => {
  return (
    <ReusableContextWrapper name='ohYaYa'>
        <hr />
        <BlockOneMainComp1 />
    </ReusableContextWrapper>
  )
}

export default BlockOneMain