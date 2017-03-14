'use strict'

const { argv: [,, ...userInput] } = process
const {parseArgs} = require('./parse-args.js')
const {err, args} = parseArgs(userInput)

if(err) return console.error(err.message)
let [num1, op, num2] = args
const {add, sub, mult, div} = require('./calculator.js')

switch(op) {
	case "+":
		console.log(add(num1, num2))
		break
	case "-":
		console.log(sub(num1, num2))
		break
	case "x":
		console.log(mult(num1, num2))
		break
	case "/":
		console.log(div(num1, num2))
		break
}
