import React from "react";
type Props = {};

export const MyContextOne: any = React.createContext({} as any);

const UseContextOne = (props: any) => {
	const [count, setCount] = React.useState(0)

    let countObj: any = React.useMemo(()=> {
        return {countVar: count, setCountFn: setCount, name: 'foo'};
    }, [count])

	return <MyContextOne.Provider value={countObj}>{props.children}</MyContextOne.Provider>;
};

export default UseContextOne;
