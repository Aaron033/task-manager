require('../src/db/mongoose')

const User = require('../src/models/user')

// 5cf2f2ece1cf6677b43a6cd5 

//The second is an object 
User.findByIdAndUpdate('5cf2f2ece1cf6677b43a6cd5', { age: 21}).then((user) => {
console.log(user)

})