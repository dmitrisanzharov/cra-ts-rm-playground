import React from "react";

type Props = {};

export const ContextAsBlockContext = React.createContext<any>({});

const ContextAsBlockComponent = ({ children, contextValues }: any) => {
	return (
		<ContextAsBlockContext.Provider value={contextValues}>
			{children}
		</ContextAsBlockContext.Provider>
	);
};

export default ContextAsBlockComponent;
