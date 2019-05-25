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

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    //This is a Asyncrones method 
    if(error){
        // The return stops the code from continue its execution 
        return console.log('Unable to connect to database!')
    }
    // Client.db is the name of the db you trying to manipulate 
    const db = client.db(databaseName) // It gives you back a database reference; typically store in verbal called db

//The code below is to insert a single document(user)

// //Users it will show in the task-manager database in the Robo 3T collections folder 
//     db.collection('users').insertOne({
//   name: "Aaron", 
//   age: 25
//     }, (error, result) =>{
//         if(error) {
//             return console.log('Unabel to insert user')
//         }
//         //This code prints out an array of documents 
//         console.log(result.ops)
//     })

//The code below is to insert many documents(users)

//See documentation "Node.js MongoDB Driver API"
//insertMany is one of the options 
// db.collection('users').insertMany([
// { 
//  name: 'Natasha', 
//  age: 24
// }, 
// {
// name: 'Liliana', 
// age: 33
// }

// ], (error, result) =>{
//     if(error){
// return console.log('Unable to insert documents!')
//     }
//     console.log(result.ops)
// })

// db.collection('tasks').insertMany([
//     {
//         description: 'Go to Gym', 
//         completed: true
//     }, {
//         description: 'Cancell insurance', 
//         completed: false
//     }, {
//         description: 'fix car', 
//         completed: false
//     }
// ] ,(error, result) =>{
//         if(error){
//     return console.log('Unable to insert documents!')
//         }
//         console.log(result.ops)
// })
})