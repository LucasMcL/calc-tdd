// Structure of app
//	- bin folder with executable file
//	- calls calculator module which calls parse args
//	- Expected input from user:
//		calc 2 - 3
//		calc 14 / 2
//		calc -2.5 * 23
//		calc -100 + -100
//	- [num] [operator] [num]
//	- Console logs result
//	- Any number input allowed
//	- Any arguments after 3 ignored
//	- Single argument logs itself
//	- Any argument that isn't a number throws an error
//	- Any operator that isn't + - / or * throws error

const { assert } = require('chai')

// parse-args should return an error if:
// 	- Either num argument isn't number or can't be coerced
// 	- Operator argument isn't + - / or *
// 	- Less than three arguments
// 		- (Will succeed if only one argument AND it is a number)

describe('parse-args', function() {
	const { parseArgs } = require('../src/parse-args.js')

	it("should return an error if the first argument isn't a number", function() {
		assert.isNotNull(parseArgs(['steve', '+', 5]).err)
	})
	it("should return an error if the third argument isn't a number", function() {
		assert.isNotNull(parseArgs([-12, '+', 'steve']).err)
	})
	it("should return an error if the operator argument isn't valid", function() {
		assert.isNotNull(parseArgs([4, 'Jerry', 5]).err)
	})
	it("if there aren't enough arguments", function() {
		assert.isNotNull(parseArgs([1, '+']).err)
	})
})

describe('calculator', function() {
	const {add, sub, mult, div} = require('../src/calculator.js')

	describe('add', function() {
		it('should return a number', function() {
			assert.isNumber(add(1, 2))
		})
		it('should equal the sum of its inputs', function() {
			assert.equal(add(1, 2), 1 + 2)
		})
	})
	describe('sub', function() {
		it('should return a number', function() {
			assert.isNumber(sub(1, 2))
		})
		it('should equal the difference of its inputs', function() {
			assert.equal(sub(5, 2), 3)
		})
	})
	describe('mult', function() {
		it('should return a number', function() {
			assert.isNumber(mult(1, 2))
		})
		it('should equal the product of its inputs', function() {
			assert.equal(mult(5, 2), 10)
		})
	})
	describe('div', function() {
		it('should return a number', function() {
			assert.isNumber(div(1, 2))
		})
		it('should equal the quotient of its inputs', function() {
			assert.equal(div(10, 2), 5)
		})
	})
})

















