//* Recursion for sum all numbers in  array

function sumNumbersRec(arr) {
	if (arr.length === 0) return 0
	return arr.shift() + sumNumbersRec(arr)
}

module.exports = sumNumbersRec
