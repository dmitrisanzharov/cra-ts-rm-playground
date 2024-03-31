import React from "react";

type Props = any;

export const MyMainContextWrapperContext = React.createContext<any>(undefined);

const MainContextWrapper = (props: Props) => {
	const obj = {
		name: "hello",
	};

	return (
		<MyMainContextWrapperContext.Provider
			value={obj}
		>
            {props.children}
        </MyMainContextWrapperContext.Provider>
	);
};

export default MainContextWrapper;
