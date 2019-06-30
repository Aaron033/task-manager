
//We are creating instances of the model User  constructor function 
const me = new User ({
    name: 'Aaron', 
    email:'hello@houston.com',
    age: 25, 
    password: 'cat525200!'
})

me.save().then(() => {
    console.log(me)

}).catch((error) => {
    console.log('Error!', error)
})

const newTask = new Task ({
    taskName : "Do lanudry", 
    completed: false
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) =>{ 
    console.log('Error', error)
}) 


app.get('/users/:id', async (req, res) =>{
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
})
   app.get('/users', async (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        // 500 database connection failed
        res.status(500).send(e)
    })

})
    app.post('/tasks', async (req, res) => {
        const task = new Task(req.body)
      
    
    
        // task.save().then(() =>{
        //     res.status(201).send(task)
        // }).catch((e) => {
        //     res.status(400).send(e)
        // })
    })
        app.get('/tasks', async  (req, res) => {

            //Finding all task 
            Task.find({}).then((tasks) => {
        
                res.send(tasks)
        
            }).catch((e) =>{ 
                res.status(500).send(e)
            })
        })



app.get('/tasks/:id', async (req, res) =>{
    const _id = req.params.id
  Task model

    Task.findById(_id).then((task) => {
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })

})

const isValidOperation = updates.every((update) => {
    //We check if the update is inclued in allowedUpdates
       return allowedUpdates.includes(update)
       // we check if the individual update is found 
       
   })


   const router = new express.Router()

router.get('/test' , (req, res) => {
    res.send('This is from my other router')
})

//this is how we access the router 
app.use(router)

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


//This code was modified due to the useage of routers 
const User = mongoose.model('User',{
    name: {
    type: String,

    trim: true,
    require: true

    }, 
    password: {
        type: String,
        required: true, 
        trim: true,
        minlength: 7,
        validate(value) {
            //The .includes() returns a true the 'password' is included 
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not containt the  word "Password"')
            }
        }

    },
    email: {
      type: String, 
      required: true,
      trim: true, 
      lowercase: true,
      validate(value){
          //We are going to use the validator library  and we are going to pass the value entered
          if(!validator.isEmail(value)){

  throw new Error ('Email is invalid')
          }
      }
    }, 

    age: {
    type: Number,
    default: 0, 
    validate(value){
        if(value < 0){
            throw new Error('Age must be a positive number')
        }
    }

    }
} )

// router.get('/test', (req, res) => {
//     res.send('From a new file')
// })

// const User = require('./models/user')
// const Task = require('./models/task')