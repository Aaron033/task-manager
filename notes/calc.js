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
        //This code checks that only one period is allowed in the typing 
        //If we are trying to add a peroid when a period has been added it won't do anything
    if(number === '.' && this.currentOperand.includes('.')) return //This will not return anything 
    this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    chooseOperation(operation){

    if(this.currentOperand === '') return 
    if(this.previousOperand !== ''){
        this.compute()
    }

        //we are setting up the operation to the operation that we passed in
this.operation = operation 

this.previousOperand = this.currentOperand
this.currentOperand = ''
    }
    compute(){

    }
    updateDisplay(){
   this.currentOperandTextElement.innerText = this.currentOperand
   this.previousOperandTextElement.innerText = this.previousOperand
    }


}

const numberButtons = document.querySelectorAll('[data-number]'); 
const operationButtons = document.querySelectorAll('[data-operation]'); 

const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement= document.querySelector('[data-current-operand]')

/* This is instance of the class calculator*/ 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        /*This is how you get the value of the button "defined 'value'"*/
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        /*This is how you get the value of the button "defined 'value'"*/
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

})