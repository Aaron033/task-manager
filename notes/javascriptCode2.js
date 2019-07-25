
//################################Factory functions ################################
function createCircle(radius)  { 
    return { 
        radius, 
        draw(){ 
            console.log('draw')
        }
    }
}

const circle1 = createCircle(1)
console.log(circle1)

// #################################

function add(x, y){ 
    return { 
        addition() { 
            console.log(x + y)
        }
    }
}

const suma = add(23,45)
//This is how we access a method 
console.log(suma.addition())
//################################Constructor functions ###########################

function Circle(radius) {
    this.radius = radius; 
    this.draw = function() { 
        console.log('draw')

    }

}

const circle = new Circle(3)

//################################ setters and getters ###########################
const person = { 
    firstName: 'Mosh', 
    lastName: 'Hamedani', 
   get  fullName() { 
        return `${person.firstName} ${person.lastName}`
    }, 
    set fullName(value) { 
        //This code will return an array 
        const parts = value.split(' '); 
        this.firstName = parts[0]; 
        this.lastName = parts[1]; 
    }
}

person.fullName = 'Aaron Botello'

console.log(person.fullName)

//################################ Local vs Global ###########################

const color = 'red'

function start() {
    const message = 'hi'; 
    const aaron = "Botello"
    // I can access the global variable color 
    console.log(color)
}

// I cannot access the aaron variable do to it is inside a block(local) 
//Note you should never set a global variable bad practice 

//################################ cloning an Object ###########################

const circle = {
    radius: 1, 
    draw() { 
        console.log('draw')
    }
}

//Const another = {} 
//for (let key in circle)
  //another[key] = circle[key]
//The code below is a only way to copy the keys 

//The code below has the same functionality as the code above 
const another = Object.assign({}, circle)
//you can also add some properties and methods 

//This is also another form 
const another = { ...circle}

console.log(another)
//################################ this ###########################
//mehtod -> obj    .... This reflects the object itself 
//function -> global (window, global) global in node , window in browsers
// (whenever im using 'this' refers the window/global object in a function)

const video ={ 
    title: 'a', 
    play() {
        console.log(this)
    }

}


video.stop = function() { 
    console.log(this)
// 'this' refers to the video object 
}

video.stop()

//****************************** */
//Capital letter to construction function ( a combention used by developers)
function Video() { 
    this.title = title; 
    console.log(this)
    // 'this' referes to the window object 
}

 const v = new Video('q')  // {} 'this' refers to the object 

 //****************************** */
 //Antoher way 

 const vide2 = { 
     title: 'a', 
     tags: ['a', 'b', 'd'], 
     showTags() { 
         this.tags.forEach(function(tag) { 
             console.log(this.title, tag)
             //if you only use 'this' it will be target the window object 
         }, this ) // 'this' is required 
     }
 }

video.showTags()

//################################ Template literasl  ###########################
const name = 'Aaron'; 
//you can also some functionality  
const call = 
` Hi ${name} ${34 * 5 }, 
Thank you ${name} for joining my mailing list 

Regrds, 
Mosh
`; 
//################################ Array filter  ###########################\

const numbers = [1, -1, 3, 4]

// const filter = numbers.filter(function (value) { return value >= 0  } 
//The first n is refering to a function the second n is referred as the returned value 
const filtered = numbers.filter(n => n >= 0)

//This code gives you an array 
const items = filtered.map(n => '<li>' + n + '</li>')
//This code will output a list of items 
const html = '<ul>' + items.join('') + '</ul>'; 
//by default it will  display a comma 
// Now it join the list by a space 

console.log(html)
//################################
const items = filtered.map(n =>{
    return {value: n}
    // 0: {value: 1}
    // 1: {value: 2}

})
//const items = filtered.map(n =>{n => ({value: n})
//Because javascript will look at this as an object 
//################################
const num = [2,34,5,3]
//This code reffers to chaining 
const items = num 
.filter(n => n >= 0 )
.map(n => ({value: n}))
.map(obj => obj.value > 1)  // The first obj returns an object // The second obj. is address if we want only values greater than 1 
console.log(items)
//################################ Array Reduce  ###########################\


// // function automobile(type){
// //     this.type = type, 

// //     this.drive = function() {
// //         console.log(drives)
// //     }
// //     console.log("Hello")
// // }

// // const car = new automobile('chevy')
// // console.log(car)
// // //This code gives you an array of keys of a function passed as parameter 
// // const keys = Object.keys(car)

// // console.log(keys)

// function Stopwatch() { 
//     let startTime, endTime, running, duration = 0; 

//     this.start = function() { 
// if(running)
//     throw new Error('Stopwatch has already started')

// runnig = true 

// startTime = new Date();
//     }

//     this.stop = function() { 
//         //If is not running we can not stop it 
//         if(!running)
//         throw new Error('Stopwatch is not started')
    
//         running = false 
    
//         endTime = new Date()
// //This code return the number in miliseconds that's why we divide by 1000
//         const seconds = (endTime.getTime() - startTime.getTime() )/ 1000
// //gettime() is a function of Date() 
//     }

//     this.reset = function() { 
// startTime = null; 
// endTime = null;
// running = false;
// duration = 0 ;
//     }

//     Object.defineProperty(this, 'duration', { 
//         get: function() { return duration}
//     })
// }
// function add(x, y){ 
//     return { 
//         multy(){
// console.log(x * y)
//         },
//         addition() { 
//             console.log(x + y)
//         }
//     }
// }

// const suma = add(23,45)
// //This is how we access to the additon method 
// console.log(suma.addition())
// console.log(suma.multy())

