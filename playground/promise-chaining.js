require('../src/db/mongoose')

const User = require('../src/models/user')

// 5cf2f2ece1cf6677b43a6cd5 


//All this function can be found on moongoose documentation 
//The second is an object 
User.findByIdAndUpdate('5cf2f2ece1cf6677b43a6cd5', { age: 25}).then((user) => {
//User is a model
    console.log(user)
return User.countDocuments({age: 25})
}).then((result) =>{ 
    console.log(result)
}).catch((e) =>{
    console.log(e)
})

//Uing async await functionality 
const updateAgeAndCount = async () =>{
    
}