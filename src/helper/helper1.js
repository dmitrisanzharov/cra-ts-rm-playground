let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];
let arr2 = ['firstValue', 'secondValue'];

arr.sort((secondValue_B, firstValue_A)=> {
    console.log(secondValue_B);
    console.log(firstValue_A);

    return firstValue_A - secondValue_B;
})

console.log(arr);

//rules
// if A - B is positive, then A to start and B to end
// if A - B is negative, then B to start and A to end
// if equal, do nothing