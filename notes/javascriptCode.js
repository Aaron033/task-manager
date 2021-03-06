// learning javascript OOP and async await 

//Encapsulation: Reduce complexity + increase reusability 
//Abstraction: Reduce complexity  + isolate impact of changes 
// Inheritance: Eliminate redundant code 
//Polymorphism: Refactor ugly switch/Case statements 


// #############################################################################################################

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
//This is an example of encapsulation 

//working with Object Oriented Programing 

//Normal declaration 

// #############################################################################################################
//Procedure example 
let baseSalary = 30000; 
let overtime = 10; 
let rate = 20; 

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate) 
}
//Procedure example  ends 
// #########################################################################################

//This is a standart function of OOP 
let employee = { 
    baseSalary: 30000,
    overtime: 10, 
    rate: 20, 
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate); 
    }
}
employee.getWage(); 


//This is an example of encapsulation  end 
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

const circle = createCircle(1); 

// Constructor Function 

function Circle(radius){
    this.radius = radius; 
    this.draw = function(){ 
        console.log('draw')
    }

}
//The word new will create an empty object 
const another = new Circle(1); 
// #############################################################################################################

// Value types (primitive )
// Number 
// String 
// Boolean 
// Symbol 
// undefined 
// null 

// Reference Types 
// Object 
// Array 
//Function 

// functions  and arrays are objects in javascript 

//Differenciating
// Primitives are compied by value 
// Objects are copied by their reference 

// ###############################################################################
function Circle(radius){
    this.radius = radius; 
 //This code below can not be access from the outsise(private)
let defaultLocation = {x: 0, y: 0}

    //The code below can be access from outside of the Circle function
    //this.defaultLocation = { x:0, y: 0} 
 this.getDefaultLocation = function() {
     return defaultLocation; 
 }

    this.draw = function(){ 
        console.log('draw')
    }

    //  ----this---- is referrering to the the property of the Circle 
    Object.defineProperty(this, 'defaultLocation',{
        //'defaultLocation' referres to read only  
        get: function() { 
            return defaultLocation
        },
        set: function(value) { 
            defaultLocation = value;
        }
    })
}
circle.defaultLocation



// ################################################
const circle = new Circle(10); 
for(let key in circle) {

    //This how we check if it is a method(function)
    if(typeof circle[key] !== 'function'){
// This is how we access the value of a key 
console.log(key, circle[key])
    }
  
}
// ################################################
//This code only gives you the keys 
const keys = Object.keys(circle)
console.log(keys)

//This is how we check a specific propertie in a function (example)
if ('radius' in circle){ 
    console.log('Circle has a radius')
}

// ##################################################################
circle.location = { x: 1} 
// circle['location'] = { x: 1}  same as above; This is used when you have a space or a dash 
const propertyName = 'center location'
circle[propertyName] = {x: 1}
