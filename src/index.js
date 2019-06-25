const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
//It is not going to grab anything from the file; it just going to ensure 
//That mongoose connects to the data base
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const bcrypt = require('bcryptjs')

//********************************************************************************************* */
const myfunction = async () => {
    //the password is what the user provide us 
const password = "Red32345"

//The first argument is the plain text 
//The second argument is the number or rounds its how many times the algorithm is executed not too few; easy to crack.Not too many; long process 
const hashedPassword = await bcrypt.hash(password, 8 )

console.log(password)
console.log(hashedPassword)

//This code will output the true if password matches the hashed password 
const isMatch = await bcrypt.compare(password, hashedPassword)

console.log(isMatch)
}

myfunction()



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/

//Task collection code ends 
//********************************************************************************************* */
app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})

//code is partially working 