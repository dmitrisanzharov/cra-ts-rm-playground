const now = Date.now();
let testValueAgo20Nov2024At1533 = 1732116766905;


function handleDueOffValueFn(dueOffInMs){

    if(!dueOffInMs){
        return 'empty cell value'
    }

    const isPositive = ( now - dueOffInMs ) > 0;

    if(isPositive){
        // use regular format
    } else {
        // multiply by -1 and then plug into the function
    }




}

let testNull = handleDueOffValue(null); // return empty cell value
console.log("testNull: ", testNull);