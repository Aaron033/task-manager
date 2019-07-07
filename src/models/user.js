const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
// Validator:its a npm module that containes functions to check emails, credit cards, etc. 
const jwt = require('jsonwebtoken')
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
          unique: true, 
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
//methods are accesible on our instances methods 
    userSchema.methods.generateAuthToken = async function() { 
        //normal function not an arrow one 
        const user = this 
//user._id is an object so we must converted to a string 
        const token = jwt.sign({_id: user._id.toSting()}, 'thisismyaaron')
return token 


    } 

    //Statics are accesible on our model methods 
userSchema.statics.findByCredentials = async (email, password) => {
 //Short cut can be used email: email = email
    const user = await User.findOne({ email})
if (!user) {
    throw new Error('unable to login')
}

//Getting the password typed and password storage 
const isMatch = await bcrypt.compare(password, user.password)
//checking for matching password 
if(!isMatch) {
    throw new Error('Unable to login')
}
// If the email or password was a match: it would return  the user 
return user 
}
//Hash the plain text password before saving 
// The second argument must be a standard function 
// beacuse arrow functions does not work.
userSchema.pre('save', async function(next) { 
    //exapmles of pre functionality , before validator or before saving  
    // the function of next is to run a code before a user is saved 
  const user = this 
//   console.log('Just before saving')
//   next()

if(user.isModified('password')) { 

//The second argument is the number of rounds
user.password = await bcrypt.hash(user.password, 8)
}

next()
})


const User = mongoose.model('User', userSchema)

module.exports = User



