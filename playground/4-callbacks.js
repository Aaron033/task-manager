const doWorkCallback =  (callback) =>{
  
    setTimeout(() =>{
        //In this code we are assuming that  an error occured 
        // callback('This is my error', undefined)

        //In this code we assumed that there was no error and the code will display the value of the "result"
callback(undefined, [1,58,85,223,22])

        //The time we are going to wait 
    }, 2000)
}

doWorkCallback((error, result) =>{
if(error){
    return console.log(error)
}
console.log(result)
} )