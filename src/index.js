const express = require('express')
require('./db/mongoose')
//It is not going to grab anything from the file; it just going to ensure 
//That mongoose connects to the data base
const User = require('./models/user')


const app = express()
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 

app.use(express.json())

//in order to access a http page we must use an http functionality 
app.post('/users', (req, res) => { 
    // now we can create an instance of user
   const user = new User(req.body)
   user.save().then(() => {
  res.send(user)
    //The catch() is to catch any error 
   }).catch((e) =>{
       res.status(400).send(e)
   })
})
//The first argument is the path and the second is the callback


app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})