import React from 'react';

const Child = () => {
	console.log('--------------------------------------------------------'); 
	console.log("child re-renders");

	return <h1>This is child</h1>;
};

export default Child; 