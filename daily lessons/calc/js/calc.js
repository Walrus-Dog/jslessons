// build a calculator class

class Calculator {
    constructor(prevOperText, currOperText){
        this.prevOperText = prevOperText;
        this.currOperText = currOperText;
        this.clear();
    }
    /*
        what do we want the calc to do?
        define opperations (add, sub, div, times)
            clear
            delete (single digit)
            append the number
            choose opperation
            compute
            update display

    */
    
            clear() {
                this.prevOperand = "";
                this.currOperand = "";
                this.opperation = undefined;
            }

            delete() {
                this.currOperand = this.currOperand.toString().slice(0, -1);
            }

            appendNumber(number) {
                if (number === "." && this.currOperand.incldues(".")) return;
                this.currOperand = this.currOperand.toString() + number.toString();
            }

            chooseOperation(operation) {
                if (this.currOperand === "") return; //if there is no number the operation buttons are disabled
                if (this.prevOperand !== "") {
                    this.compute();
                };

                this.operation = operation;
                this.prevOperand = this.currOperand;
                this.currOperand = ""; //sets this.currOperand back to empty string
            }

            compute(){
                let computation;
                const prev = parseFloat(this.prevOperand);
                const current = parseFloat(this.currOperand);

                if (isNaN(prev) || isNaN(current)) return;
                switch (this.operation) {
                    case "+":
                        computation = prev + current;
                        break;
                    case "-":
                        computation = prev - current;
                        break;
                    case "*":
                        computation = prev * current;
                        break;
                    case "/":
                        computation = prev / current;
                        break;
                    default:
                        return;
                }

                this.currOperand = computation;
                this.operation = undefined;
                this.prevOperand = "";
            }

            getDisplayNumber(number){
                const stringNumber = number.toString();
                const integerDigits = parseFloat(stringNumber.split("."[0]));
                const decimalDigits = stringNumber.split("."[1]);
                let integerDisplay;

                if(isNaN(integerDigits)) {
                    integerDisplay = "";
                } else {
                    integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0})
                }

                // if (decimalDigits != null) {
                //     return `${integerDisplay}.${decimalDigits}`;
                // } else {
                //     return integerDisplay;
                // }

                return decimalDigits;
            }

            updateDisplay() {
                this.currOperText.innerText = this.getDisplayNumber(this.currOperand);
                if (this.operation != null) {
                    this.prevOperText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
                } else {
                    this.prevOperText.innerText = "";
                };
            }
}

//set constants to access buttons
//enclose attribute-value pairs in brackets

const numBtn = document.querySelectorAll("[data-number]");
const operBtn = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals]");
const delBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");

const prevOperText = document.querySelector("[data-prev-operand]");
const currOperText = document.querySelector("[data-curr-operand]");

const calculator = new Calculator(prevOperText, currOperText);

numBtn.forEach(button => {
    button.addEventListener("click", ()=> {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operBtn.forEach(button => {
    button.addEventListener("click", ()=> {
        console.log(button.innerText)
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalBtn.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearBtn.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
});

delBtn.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})