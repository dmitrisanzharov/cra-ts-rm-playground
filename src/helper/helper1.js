const arr = [1, 2, 3, 4, 5];

function addFoo(accumulator, item) {
    accumulator = accumulator + item;
    return accumulator;
}

let a = arr.reduce((accumulator, item) => {
    accumulator = addFoo(accumulator, item);
    return accumulator;
}, 0);
