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
const updateAgeAndCount = async (id, age) =>{
//We will need the id and the age that we want to change to 
const user = await User.findByIdAndUpdate(id, {age})
//We are setting the property to a variable in age (age: age) 
// We can use a short hand by just using age (ES6 sintax)
const count = await User.countDocuments({age})
//The code above count the documents with a specific age 
return count


}

updateAgeAndCount('5cf2f2ece1cf6677b43a6cd5', 34).then((count) => {
    console.log(count)
    // it shows the count of users that meet the 34 age 
}).catch((e) => {
    console.log(e)
})