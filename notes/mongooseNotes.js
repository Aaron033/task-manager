
//We are creating instances of the model User  constructor function 
const me = new User ({
    name: 'Aaron', 
    email:'hello@houston.com',
    age: 25, 
    password: 'cat525200!'
})

me.save().then(() => {
    console.log(me)

}).catch((error) => {
    console.log('Error!', error)
})

const newTask = new Task ({
    taskName : "Do lanudry", 
    completed: false
})

newTask.save().then(() => {
    console.log(newTask)
}).catch((error) =>{ 
    console.log('Error', error)
}) 


app.get('/users/:id', async (req, res) =>{
    //The req.params is the values after users/:id http request
   const _id = req.params.id
   //The params.id matches with :id 
   
   User.findById(_id).then((user) => {
   if(!user) {
       return res.status(404).send()
   }
   res.send(user)

   }).catch((e) => {
    res.status(500).send()
   })

   app.get('/users', async (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        // 500 database connection failed
        res.status(500).send(e)
    })


    app.post('/tasks', async (req, res) => {
        const task = new Task(req.body)
      
    
    
        // task.save().then(() =>{
        //     res.status(201).send(task)
        // }).catch((e) => {
        //     res.status(400).send(e)
        // })