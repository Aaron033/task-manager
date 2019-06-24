const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


//This code gets all tasks 
router.get('/tasks', async  (req, res) => {

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

router.get('/tasks/:id', async (req, res) =>{
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
router.patch('/tasks/:id', async (req, res) => {

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

router.delete('/tasks/:id', async (req, res) =>{
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

module.exports = router 