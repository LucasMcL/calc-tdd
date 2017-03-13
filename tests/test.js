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
