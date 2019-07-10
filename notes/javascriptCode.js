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

//Async / await / fetch 

async function fetchUsers() {
    //The code below returns a promise 
const res = await fetch ('http://jsonplaceholder.typicode.com/users')

const data = await res.json()
//Transforming the res. to json format 
console.log(data)

}