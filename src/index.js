const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')
require('./db/mongoose')
const app = express()
//It is not going to grab anything from the file; it just going to ensure 
//That mongoose connects to the data base
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 
app.use(express.json())

//********************************************************************************************* */
//User collection code begins

//in order to access a http page we must use an http functionality 
app.post('/users', (req, res) => { 
    // now we can create an instance of user
   const user = new User(req.body)
   user.save().then(() => {
  res.status(201).send(user)
    //The catch() is to catch any error 
   }).catch((e) =>{
       res.status(400).send(e)
   })
})
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
//This code is gets all user names 
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        // 500 database connection failed
        res.status(500).send(e)
    })
})

// expresss gives us access to routes parameters 
//:id, could be any name
//This code gets a single user name 
app.get('/users/:id',(req, res) =>{
    //The req.params is the values after users/:id http request
   const _id = req.params.id
   //The params.id matches with :id 
   
   User.findById(_id).then((user) => {
   if(!user) {
       return res.status(404).send()
   }
   res.send(user)

   }).catch((e) => {
    res.status(500).send()
   })

} )


//User collection code ends 

//********************************************************************************************* */

//Task collection code begins  

//The first argument is the path and the second is the callback
//The tasks arguments comes from the Robo 3T collection 
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() =>{
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
//This code gets all tasks 
app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {

        res.send(tasks)

    }).catch((e) =>{ 
        res.status(500).send(e)
    })
})

//This code gets a single task name 


//Task collection code ends 
//********************************************************************************************* */
app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})