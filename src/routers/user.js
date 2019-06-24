const express = require('express')
//This code is how we access the user.js file and its requirements 
const User = require('../models/user')
const router = new express.Router()
//We are creating an instance of router using express 



// router.get('/test', (req, res) => {
//     res.send('From a new file')
// })

//in order to access a http page we must use an http functionality 
router.post('/users', async (req, res) => { 
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
router.get('/users', async (req, res) => {
 
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
router.get('/users/:id', async (req, res) =>{
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
router.patch('/users/:id', async (req, res) => {
  
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

router.delete('/users/:id', async (req, res) => {
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
router.post('/tasks', async (req, res) => {
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
module.exports = router 