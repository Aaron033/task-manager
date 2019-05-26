//CRUD create read update delete
const { MongoClient, ObjectID} = require('mongodb')


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
//The user is just a function argument

// This code needs a ObjectID functionality 
    // db.collection('users').findOne({_id: new ObjectID( "5ce9663b8fe4e5adf5cc323f")}, (error, user) =>{ 
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // } )
    //toArray is the callback and it is founded in collection/find/return(cursor)
    //Cursor is a pointer to data and has too many method and one of them is toArray 
db.collection('users').find({age: 25}).toArray((error, users) => {
    console.log(users)
})

})