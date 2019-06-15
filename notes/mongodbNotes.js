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

//The code below is to insert a single document(user)

// //Users it will show in the task-manager database in the Robo 3T collections folder 
//     db.collection('users').insertOne({
//         _id: id,
//   name: "Victoria", 
//   age: 23
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
 
//This is how you look for a collection
// db.collection('users').findOne({name: 'Natasha'}, (error, user) =>{ 
//     if(error){
//         return console.log('Unable to fetch')
//     }
//     console.log(user)


// This code needs a ObjectID functionality 
    // db.collection('users').findOne({_id: new ObjectID( "5ce9663b8fe4e5adf5cc323f")}, (error, user) =>{ 
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // } )
    //toArray is the callback and it is founded in collection/find/return(cursor)
    //Cursor is a pointer to data and has too many method and one of them is toArray 

    // db.collection('users').find({age: 25}).toArray((error, users) => {
    //     console.log(users)
    // })
    
    // db.collection('users').find({age: 25}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ce96ac3c274a3b44106fe22")}, (error, user) =>{
//     if(error){
//         return console.log('Unable to find the username')
//     }
//     console.log(user)
// } )


 //This code is to find a taks with a specific property in the collecttions doc
// db.collection('tasks').find({completed: false }).toArray((error, done) =>{
// console.log(done)
// })




const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("5ce95f055940eda354e18c82")
},{
    //We define object operators 
    $set: {
        name: 'Selina'
    }
})

updatePromise.then((result) => {
console.log(result)
}).catch((error) => {
console.log(error)
})


//The below code has the same functionality and it is more commonly used 

db.collection('users').updateOne({
    _id: new ObjectID("5ce95f055940eda354e18c82")
},{
    //We define object operators 
    $set: {
        name: 'Selina'
    }
}).then((result) => {
console.log(result)
}).catch((error) => {
console.log(error)
}) 

//The code below is to upadate a document 
db.collection('tasks').updateMany({
    completed: false
}, {
    $set: {
        completed: true
    }
}).then((result) =>{
 console.log(result.modifiedCount)
}).catch((error) => {
    console.log(error)
})

//The code below is to delete users with a speficied propertie 
db.collection('users').deleteMany({
    //We assume that we deleting any one that matchs the criteria
    age: 25
}).then((result) =>{ 
    console.log(result)
}).catch((error) =>{ 
    console.log(error)
})

db.collection('tasks').deleteOne({
    description: "fix car"
}).then((result) =>{
    console.log(result)
}).catch((error) =>{ 
    console.log(error)
})
// } )



// 201 means a resource was created 
// http methods are POST, GET, PATCH ,DELETE among many others
//POST means that we want to create a new resource 

//needs to restart the data base 