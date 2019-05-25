//CRUD create read update delete



const mongodb = require('mongodb')
// Initialize the connection 
const MongoClient = mongodb.MongoClient
//MongoClient give us the necessary access to create  CRUD 

// We are using mongodb terminology 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' //This will show as a database in the Robo 3T

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    //This is a Asyncrones method 
    if(error){
        // The return stops the code from continue its execution 
        return console.log('Unable to connect to database!')
    }
    // Client.db is the name of the db you trying to manipulate 
    const db = client.db(databaseName) // It gives you back a database reference; typically store in verbal called db
//Users it will show in the task-manager database in the Robo 3T collections folder 
    db.collection('users').insertOne({
  name: "Aaron", 
  age: 25
    }, (error, result) =>{
        if(error) {
            return console.log('Unabel to insert user')
        }
        //This code prints out an array of documents 
        console.log(result.ops)
    })


})