const doWorkCallback =  () =>{
  
    setTimeout(() =>{
        callback('This is my error', undefined)
        //The time we are going to wait 
    }, 2000)
}

doWorkCallback((error, result) =>{

} )