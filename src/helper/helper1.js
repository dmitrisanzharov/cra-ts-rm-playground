
function myDelay(){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 2000)
    })
}

let a = myDelay();
console.log(a);