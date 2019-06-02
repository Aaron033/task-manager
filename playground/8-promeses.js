import { rejects } from "assert";

// Promeses takes an argument and that argument is a function in this case we 
// can use an arrow function
const doWorkPromise = new Promise((resolve, reject) =>{


    //This is a asyncrones process 
    setTimeout(() =>{

//   resolve([4.3,23,2341,23])

reject('Things went wrong')

    }, 2000)

})

doWorkPromise.then((result) =>{ 
    console.log('Success!', result)
}).catch((error) =>{
    console.log("Error", error)
})


const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//Now we are calling the add function 