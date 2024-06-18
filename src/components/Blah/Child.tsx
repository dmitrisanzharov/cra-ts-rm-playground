import React from "react";

type Props = {};

const Child = (props: any) => {
    console.log('props in child', props)
	return <div>
        <h2>Child</h2>
        <p>{props.message}</p>
    </div>;
};

export default (props: any) => {
    console.log('props in unnamed export', props)
	return (
		<div style={{...props.style}}>
			<Child {...props} />
		</div>
	);
};
