const express = require('express')
//This code is how we access the user.js file and its requirements 
const User = require('../models/user')
const router = new express.Router()
//We are creating an instance of router using express 



//in order to access a http page we must use an http functionality 
router.post('/users', async (req, res) => { 
    // now we can create an instance of user
   const user = new User(req.body)
   //Everthing from here is going to run if it is succesfull or not 
   try{ 
       await user.save()
       const token = await user.generateAuthToken()
       res.status(201).send({ user, token })
   } catch (e){
       res.status(400).send(e)
   }


})

router.post('/users/login', async (req, res) => {
    try{ 
 // User is a general section of all users 
        const user = await User.findByCredentials(req.body.email, req.body.password)
        //This code is for a specific user 
        const token = await user.generateAuthToken() 
res.send({user, token})

    } catch(e) {
res.status(400).send()
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
    console.log(e.message)
    res.status(500).send()
}
} )
//patch() is used for updating a resource 
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body) //We pass the obejct that we trying to work with 
    //It would take object  keys and it would return an array of strings in which is property of that object 
   //every() takes a callback function.
   // every() calls every item in the array 

//The allowed properties that are updatble 
const allowedUpdates = ['name', 'email', 'password', 'age ']
 // To convert an object into an array of its properties 

const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//{} finally works 
 //We check if the update is inclued in allowedUpdates 
    // we check if the individual update is found 
if(!isValidOperation) {
    //We check if is not an allowed operation 
    return res.status(400).send({ error: 'Invalid update'})
}
    try {
        //mongoose queries bypass more advance features like middlewarer 
      const user = await User.findById(req.params.id)
     
      //it would take care of any possible values 
      updates.forEach((update) =>     user[update] = req.body[update])
          //Accesing the propierty dinamically 
  
          await user.save()
        //  const _id = req.params.id and req.params.id are the same thing 
       // const user = await User.findByIdAndUpdate(req.params.id,  req.body, {new: true, runValidators: true })
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



module.exports = router 
//Cast to ObjectId failed for value "5cf9c3dc3fd7bf9d73e2ddb" at path "_id" for model "User"