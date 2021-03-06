const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
//It is not going to grab anything from the file; it just going to ensure that mongoose connects to the data base
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 
//It is either heroku or set up port 
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})
    const jwt = require('jsonwebtoken')


const myFunction = async() => { 
const token = jwt.sign({_id: 'abc123'}, 'thisismyaaron', {expiresIn: "7d"})
console.log(token)

const data = jwt.verify(token, 'thisismyaaron')
console.log(data)
}


myFunction() 


