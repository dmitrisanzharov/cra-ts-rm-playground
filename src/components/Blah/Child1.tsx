import React from 'react';

const Child1 = React.memo((props: any) => {

    console.log('render Child1');

    return <div>Child 1</div>;
});

export default Child1;