const dayjs = require('dayjs')

const carDate = "2023-08-03 14:14:28"


console.log(carDate);


function checkIfVehicleWasAddedInLast30Days(dateToCheck){

    const todayInEpoch = dayjs().valueOf();

    const dateToCheckInEpoch = dayjs(dateToCheck).valueOf();

    const differenceInEpoch = todayInEpoch - dateToCheckInEpoch;

    const differenceInDays = differenceInEpoch / 1000 / 60 / 60 / 24;

    return differenceInDays >= 30 ? true : false;

}

let a = checkIfVehicleWasAddedInLast30Days(carDate); 
console.log(a);
