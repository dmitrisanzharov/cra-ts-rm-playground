import React from 'react'
import { Context2Const } from '.'

type Props = {}

const CompInTwo = (props: Props) => {

    const compInTwoValues = React.useContext(Context2Const) as any;

   compInTwoValues.setState({...compInTwoValues.state, newKey: 'newVal'});

    // React.useEffect(() => {
    //   compInTwoValues.setState({...compInTwoValues.state, newKey: 'newVal'});
    // }, []);

  return (
    <div>Comp1</div>
  )
}

export default CompInTwo;