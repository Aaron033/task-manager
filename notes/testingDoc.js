function automobile(type){
    this.type = type, 

    this.drive = function() {
        console.log(drives)
    }
    console.log("Hello")
}

const car = new automobile('chevy')
console.log(car)

const keys = Object.keys(car)

console.log(keys)