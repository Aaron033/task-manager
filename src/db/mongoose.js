const mongoose = require('mongoose')

//Mongose data is going to look different 
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {

  useNewUrlParser:true, 
  //
  useCreateIndex: true
})