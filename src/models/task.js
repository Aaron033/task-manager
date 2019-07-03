const mongoose = require('mongoose')


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

module.exports = Task