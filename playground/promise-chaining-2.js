require('../src/db/mongoose')

 const Task = require('../src/models/task')

 //Getting a tag deletion using findByIdAndDelete()
 Task.findByIdAndDelete('5cf29bcbcdb0c52d3cd52048').then((task) => {
     console.log(task)
     return Task.countDocuments({ completed: false})
 }).then((result) =>{
     console.log(result)
 }).catch((e) =>{
     console.log(e)
 })
