const mongoose = require('mongoose')
const validator = require('validator')
// Validator to check emails, credit cards, etc. 


//Mongoose collection is written different from mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

  useNewUrlParser: true, 
  //It allows mongoose to work with mongodb to create indexes and allows the access to the data we need to connect to  
  useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
    type: String,
    require: true, 
    trim: true

    }, 
    password: {
        type: String,
        required: true, 
        trim: true,
        minlength: 7,
        validate(value) {
            //The .includes() returns a true the 'password' is included 
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not containt the  word "Password')
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



const newTask = new Task ({
    description : "Do lanudry", 
    completed: true
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) =>{ 
    console.log('Error', error)
}) 
