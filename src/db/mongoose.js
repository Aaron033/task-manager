const mongoose = require('mongoose')
//Mongoose collection is written different from mongodb 

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true, 
  //It allows mongoose to work with mongodb to create indexes and allows the access to the data we need to connect to  
  useCreateIndex: true,
  useFindAndModify: false 
})

// 201 means a resource was created 
// http methods are POST, GET, PATCH ,DELETE among many others
//POST means that we want to create a new resource 

//needs to restart the data base 