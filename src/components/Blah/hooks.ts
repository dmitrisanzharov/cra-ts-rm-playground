import React from "react";

export const useMyStuff = () => {
	const [number, setNumber] = React.useState(0);

    console.log('============================');

	function handleClick() {
        console.log('trigger')
		setNumber(number + 1);
	}

    console.log('number', number)
	return { number, handleClick }
};
