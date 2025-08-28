import React from 'react'
import { Context2Const } from '.'

type Props = {}

const CompInTwoB = (props: Props) => {

    const compB = React.useContext(Context2Const) as any;

    console.log("comp two: ", compB);

    React.useEffect(() => {
        console.log("comp two: useEffect", compB);
    }, [compB]);

    React.useEffect(() => {
        console.log('comp one useEffect');
    }, []);

    return (
        <div>comp two: {JSON.stringify(compB)}</div>
    )
}

export default CompInTwoB;