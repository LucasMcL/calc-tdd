'use strict'

// Processes arguments from cli
// Exports method for processing arguments

function parseArgs(args) {
	let err = null
	let [num1, op, num2] = args
	const validOps = ["+", "-", "/", "x"]

	if (validOps.includes(op) === false) {
		err = new Error('Please use on of these operators: +, -, /, x')
	} else if(isNaN(num1) === true) {
		err = new Error('Please enter a number for the first argument')
	} else if(isNaN(num2) === true) {
		err = new Error('please unter a number for the third argument')
	}

	args = [Number(num1), op, Number(num2)]
	return {err, args}
}

module.exports = {parseArgs}
