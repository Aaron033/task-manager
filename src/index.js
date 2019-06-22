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