const doWorkCallback =  (callback) =>{
  
    setTimeout(() =>{
        callback('This is my error', undefined)
        //The time we are going to wait 
    }, 2000)
}

doWorkCallback((error, result) =>{
if(error){
    return console.log(error)
}
console.log(result)
} )