import React from 'react'

type Props = {}

const Foo = (props: Props) => {

    const [count, setCount] = React.useState(0);


   async function myDelay(){  // it WILL work without async, BUT its a good idea to make it async, cause SonarLint was asking
        return new Promise((resolve, reject) =>{
            setTimeout(()=> {
                console.log('triggered')
                resolve({name: 'dmitri'}); // does NOT need a return, it inherits return from new Promise(); 
            }, 2000)
        }).then(el => {
            // console.log(el); 
            console.log('a2', a);
        }); // here I can use .then() right inside the function
    }
    
    let a = myDelay();

    React.useEffect(() => {
        console.log('a', a)
    }, [a]);
    

  return (
    <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>inc</button>
    </div>
  )
}

export default Foo;