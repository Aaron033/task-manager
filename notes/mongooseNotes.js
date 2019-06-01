
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
