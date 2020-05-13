const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
	if (currentNumber === 0) {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = ''
}

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "-":
			result = prevNumber - currentNumber
			break
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

equalSign.addEventListener("click", (event) => {
	calculate()
	updateScreen(currentNumber)
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}
clearBtn.addEventListener("click", (event) => {
	clearAll()
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

decimal.addEventListener("click", (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})