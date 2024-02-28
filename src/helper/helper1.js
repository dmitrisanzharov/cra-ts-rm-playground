const obj1 = {
    foo1: 'foo',
    bar: {
        blah: 'blah'
    }
}

const obj2 = {
    foo2: 'foo2'
}

let test = obj1?.bar?.blah2;
console.log("test: ", test);