// learning javascript promises and async await 

//Working with promises

let p = new Promise((resolve, reject) => {

    let a = 1 + 1
    if (a == 2) {
        resolve('sucess')
    } else {
        reject('Failed')

    }

})

p.then((message) => {
    console.log('This is in the then ' + message)  // This is code is going to be executed with the resolve function  
}).catch((message) => { 
console.log('This is in the catch' + message ) // This is code is going to be executed with the reject function  


})
// #############################################################################################################
//Async / Await 
async function init() {
    await createPost({ title: 'post Three', body: 'This is post three'}); 
    getPosts();
}


//Using promise.all 

const promise1 = Promise.resolve('Hello World')

const promise2 = 10; 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res =>{
    res.json()
    //when using fetch you must convert the info to json format 
)

Promise.all([promise1, promise2, promise3, promise4 ])
.then( values =>{
    console.log(values)
})
// #############################################################################################################
//Async / await / fetch 

async function fetchUsers() {
    //The code below returns a promise 
const res = await fetch ('http://jsonplaceholder.typicode.com/users')

const data = await res.json()
//Transforming the res. to json format 
console.log(data)

}

fetchUsers(); 
//#############################################################################################################
//special notes 
//Cast to ObjectId failed for value "5cf9c3dc3fd7bf9d73e2ddb" at path "_id" for model "User"

// #############################################################################################################


//working with Object Oriented Programing 

//Normal declaration 

let baseSalary = 30000; 
let overtime = 10; 
let rate = 20; 

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate) 
}
// Object oriented programing 

//This is a standart function of OOP 
let employee = { 
    baseSalary: 30000,
    overtime: 10, 
    rate: 20, 
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate); 
    }
}

//This is how we access OOP 
employee.getWage(); 

// #############################################################################################################
//Factory function  
function createCircle(radius){
    return {
        radius, 
        draw: function(){
            console.log('draw')
        }
    }
}