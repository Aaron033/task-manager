const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
require('./db/mongoose')

const app = express()
//It is not going to grab anything from the file; it just going to ensure 
//That mongoose connects to the data base
//The code below is needed in order to develop the app in heroku 
const port = process.env.PORT || 3000 
app.use(express.json())
app.use(userRouter)



//********************************************************************************************* */



//in order to access a http page we must use an http functionality 
app.post('/users', async (req, res) => { 
    // now we can create an instance of user
   const user = new User(req.body)

   //Everthing from here is going to run if it is succesfull or not 

   try{ 
       await user.save()
res.status(201).send(user)
   } catch (e){
       res.status(400).send(e)
   }

   
})


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
//This code is gets all user names 
app.get('/users', async (req, res) => {
 
    try {
        const users = await User.find({})
        res.send(users) 

    } catch(e) {
        res.status(500).send()
    }
})

// expresss gives us access to routes parameters 
//:id, could be any name
//This code gets a single user name 
app.get('/users/:id', async (req, res) =>{
    //The req.params is the values after users/:id http request
   const _id = req.params.id
   //The params.id matches with :id 

try {
    //User.findbyId comes from mongoose 
    const user = await User.findById(_id)
    //Checking for user aviability 
    if(!user){
        return res.status(404).send()
    }
    //If there is user we will send it 
    res.send(user)

}catch(e){
    res.status(500).send()
}


} )
//patch() is used for updating a resource 
app.patch('/users/:id', async (req, res) => {
  
//The allowed properties that are updatble 
const allowedUpdates = ['name', 'email', 'password', 'age ']
 // To convert an object into an array of its properties 
 const updates = Object.keys(req.body) //We pass the obejct that we trying to work with 
 //It would take object  keys and it would return an array of strings in which is property of that object 
//every() takes a callback function.
// every() calls every item in the array 
const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//{} finally works 
 //We check if the update is inclued in allowedUpdates 
    // we check if the individual update is found 
if(!isValidOperation) {
    //We check if is not an allowed operation 
    return res.status(400).send({ error: 'Invalid update'})
}
    try {

        //  const _id = req.params.id and req.params.id are the same thing 
        const user = await User.findByIdAndUpdate(req.params.id,  req.body, {new: true, runValidators: true })
        //It will return the new user instead of the founded one

        if(!user){
            return res.status(404).send()
        }

        res.send(user)
    } catch(e) { 

    console.log(e.message)
     res.status(400).send(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
  const user = await User.findByIdAndDelete(req.params.id)
  if(!user){
      return res.status(404).send()
  }
  res.send(user)
    }catch(e){
res.status(500).send()
    }
})

//********************************************************************************************* */
//The first argument is the path and the second is the callback
//The tasks arguments comes from the Robo 3T collection 
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    await task.save()

    try{
        await task.save()
        res.status(201).send(task)

    }catch(e)
    {
        res.status(400).send(e)
    }
})

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GET ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
//This code gets all tasks 
app.get('/tasks', async  (req, res) => {

    //Finding all task 
    try{
        //We store all the tasks that we found in the tasks variable 
        const tasks = await Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
})

//This code gets a single task name 

app.get('/tasks/:id', async (req, res) =>{
    const _id = req.params.id
  //Task model
try{
 const task = await Task.findById(_id)
//If there is not user 
 if(!task){
     return res.status(404).send()
 }
 res.send(task)

} catch(e){
    console.log(e.message)
    res.status(500).send(e)
}

})


//Creating a code to update a task uisng pathc
app.patch('/tasks/:id', async (req, res) => {

    const allowedUpdates = ['description', 'completed']

    const updates = Object.keys(req.body)

    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'invalid update'})
    
    }

    try {
        //Fisrt parameter is the thing that we trying to update 
        // second parameter the updates that we trying to apply on 
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true}) 
        
        //It would return a error 
        if(!task){
            return res.status(404).send()
        }

        res.send(task)
       
    } catch(e) { 
        console.log(e.message)
        res.status(400).send(e)
       }


})

app.delete('/tasks/:id', async (req, res) =>{
    try{ 
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

//Task collection code ends 
//********************************************************************************************* */
app.listen(port, () => { 
    console.log('Server is up on port ' + port)
})

//code is partially working 