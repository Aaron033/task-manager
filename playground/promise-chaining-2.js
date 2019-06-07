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

 const deleteTaskAndCount = async (id) => {
     const task = await Task.findByIdAndDelete(id)

     const count = await Task.countDocuments({completed:false })

     return count
 }

 deleteTaskAndCount('5cf3d4418ab7c4554e74fe89').then((count) =>{
     console.log(count)
 }).catch((e) => {
     console.log(e)
 })