//CRUD create read update delete



// const mongodb = require('mongodb')
// Initialize the connection 
// const MongoClient = mongodb.MongoClient
// //MongoClient give us the necessary access to create  CRUD 
// const ObjectID = monogodb.ObjectID // This is called destructuring 
const { MongoClient, ObjectID} = require('mongodb')

// We are using mongodb terminology 
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' //This will show as a database in the Robo 3T

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
console.log()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    //This is a Asyncrones method 
    if(error){
        // The return stops the code from continue its execution 
        return console.log('Unable to connect to database!')
    }
    // Client.db is the name of the db you trying to manipulate 
    const db = client.db(databaseName) // It gives you back a database reference; typically store in verbal called db

})