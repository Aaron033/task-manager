// function automobile(type){
//     this.type = type, 

//     this.drive = function() {
//         console.log(drives)
//     }
//     console.log("Hello")
// }

// const car = new automobile('chevy')
// console.log(car)
// //This code gives you an array of keys of a function passed as parameter 
// const keys = Object.keys(car)

// console.log(keys)

function Stopwatch() { 
    let startTime, endTime, running, duration = 0; 

    this.start = function() { 
if(running)
    throw new Error('Stopwatch has already started')

runnig = true 

startTime = new Date();
    }

    this.stop = function() { 
        if(!running)
        throw new Error('Stopwatch has already stopped')
    
        running = false 
    
        startTime = new Date()

    }

    this.reset = function() { 


    }

    Object.defineProperty(this, 'duration', { 
        get: function() { return duration}
    })
}