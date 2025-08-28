import React from 'react'
import { Context2Const } from '.'

type Props = {}

const CompInTwoC = (props: Props) => {

    // const b = React.useContext(Context2Const) as any;

    // console.log("b: ", b);

    // React.useEffect(() => {
    //     console.log("b useEffect: ", b);
    // }, [b]);
    
    console.log('C mounted');

    return (
        <div>C</div>
    )
}

export default CompInTwoC;