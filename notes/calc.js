class Calculator{
    constructor( previousOperandTextElement, currentOperandTextElement){

        this.previousOperandTextElement = previousOperandTextElement 
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() { 

this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined  

    }

    delete(){
this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return 
    this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand;
    }


}

const numberButtons = document.querySelectorAll('data-number'); 
const operationButtons = document.querySelectorAll('[data-operation]'); 

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement= document.querySelector('[data-current-operand]');

/* This is instance of the class calculator*/ 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () =>{
        /*This is how you get the value of the button "name"*/
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})