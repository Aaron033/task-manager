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

})