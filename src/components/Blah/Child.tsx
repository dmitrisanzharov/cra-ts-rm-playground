import React from 'react';

const Child = React.memo(({name}: any) => {
	console.log('--------------------------------------------------------'); 
	console.log("child re-renders");

	return <h1>This is child, with name: {name}</h1>;
});

export default Child; 