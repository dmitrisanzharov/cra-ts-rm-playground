async function foo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
};

foo().then((message) => {
    console.log(message);
});



