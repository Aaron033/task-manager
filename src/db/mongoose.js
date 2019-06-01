const mongoose = require('mongoose')
const validator = require('validator')
// Validator to check emails, credit cards, etc. 



//Mongoose collection is written different from mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

  useNewUrlParser: true, 
  //It allows mongoose to work with mongodb to create indexes and allows the access to the data we need to connect to  
  useCreateIndex: true
})



//We define the second model that will appear in the collection section 
const Task = mongoose.model('Task', {
    description:{
        type: String,
        trim: true, 
        required: true,
        
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
})

// const me = new User ({
//     name: 'Aaron', 
//     email:'hello@houston.com',
//     age: 25, 
//     password: 'cat525200!'
// })

// me.save().then(() => {
//     console.log(me)

// }).catch((error) => {
//     console.log('Error!', error)
// })

// 201 means a resource was created 
// http methos are POST, GET, PATCH ,DELETE 
//POST means that we want to create a new resource 

const newTask = new Task ({
    description : "limpia", 
   
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) =>{ 
    console.log('Error', error)
}) 
