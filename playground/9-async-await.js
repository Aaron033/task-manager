
//creating async functionality 
const doWork = async () => {

}

// console.log(doWork())

//When the .then() its going to run when the promise is fullfield 
doWork().then((result) =>{
//I get access to the result 
console.log('Result', result)
}).catch((e) =>{ 
    console.log('e', e)
})