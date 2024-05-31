import React from "react";
// components
import ComponentOne from 'src/context/ComponentOne';
import ComponentTwo from 'src/context/ComponentTwo';

export const MyContextVersionOne = React.createContext<any>({});

const ContextVersionOneComponent = () => {
	const values: any = {
		name: "Dmitry",
		age: 30,
        componentOneValue: 'Value for one',
        componentTwoValue: 'Value for two'
	};

	return (
		<MyContextVersionOne.Provider
			value={values}
		>
            <h1>This is the main heading for the component</h1>
            <ComponentOne />
            <ComponentTwo />
        </MyContextVersionOne.Provider>
	);
};

export default ContextVersionOneComponent;