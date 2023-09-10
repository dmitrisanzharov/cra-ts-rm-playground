import React from 'react';

function IndeterminateCheckbox({ indeterminate, ...rest }: any) {
    const ref = React.useRef<any>(null);

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.interminate = 'anything'; // * this is just DUMMY code, to avoid TS error
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate, rest.checked]);

    return <input type='checkbox' ref={ref} {...rest} />;
}

export default IndeterminateCheckbox;
