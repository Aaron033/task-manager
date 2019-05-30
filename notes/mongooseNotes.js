
//We are creating instances of the model User  constructor function 
const me = new User ({
    name: 'Aaron', 
    age: 25
})

me.save().then(() => {
    console.log(me)

}).catch((error) => {
    console.log('Error!', error)
})