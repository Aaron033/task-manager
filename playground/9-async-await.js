const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}



//creating async functionality 
const doWork = async () => {
const sum = await add(1,99)

    //throw new Error('Somenting went wrong')
    return sum 
}

// console.log(doWork())



//When the .then() its going to run when the promise is fullfield 
doWork().then((result) =>{
//I get access to the result 
console.log('Result', result)
}).catch((e) =>{ 
    console.log('e', e)
})