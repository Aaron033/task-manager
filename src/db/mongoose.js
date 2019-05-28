const mongoose = require('mongoose')

//Mongose data is going to look different 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

  useNewUrlParser: true, 
  //It allows mongoose to  working with mongodb to create indexes and access the data we need to access 
  useCreateIndex: true
})

const User = mongoose.model('User', )