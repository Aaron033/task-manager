const mongoose = require('mongoose')
const validator = require('validator')
// Validator to check emails, credit cards, etc. 

const userSchema = new mongoose.Schema(
    {
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

// The second argument must be a standard function 
// beacuse arrow functions does not work with 
userSchema.pre('save', async function(next) { 
    //exapmles of pre functionality , before validator or before saving  
    // the function of next is to run a code before a user is saved 
  const user = this 
//   console.log('Just before saving')
//   next()

if(user.isModified(password)) { 

//The second argument is the number of roaunds
user.password = await bcrypt.hash(user.password, 8)
}

next()
})


const User = mongoose.model('User', userSchema)

module.exports = User

