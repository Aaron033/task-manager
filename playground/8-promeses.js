// Promeses takes an argument and that argument is a function in this case we 
// can use an arrow function
const doWorkPromise = new Promise(() =>{


    //This is a asyncrones process 
    setTimeout(() =>{

  resolve([4.3,23,2341,23])

    }, 2000)

})

doWorkPromise.then((result) =>{ 
    console.log('Success!', result)
})