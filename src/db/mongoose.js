const mongoose = require('mongoose')
const validator = require('validator')
// Validator to check emails, credit cards, etc. 


//Mongose data is going to look different 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

  useNewUrlParser: true, 
  //It allows mongoose to  working with mongodb to create indexes and access the data we need to access 
  useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
    type: String,
    require: true

    }, 
    email: {
      type: String, 
      required: true,
      validate(value){
          //We are going to use the validator library 
          if(!validator.isEmail(value)){
              
  throw new Error ('Email is invalid')
          }
      }
    }, 

    age: {
    type: Number,
    validate(value){
        if(value < 0){
            throw new Error('Age must be a positive number')
        }
    }

    }
} )

//We define the second model that will appear in the collection section 
const Task = mongoose.model('Task', {
    taskName:{
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

