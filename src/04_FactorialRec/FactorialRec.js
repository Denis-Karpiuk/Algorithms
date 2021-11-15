//* Factorial - recursion

function factorialRec(x) {
	if (x < 0) return 'Incoming number must be a natural number'
	if (x === 0) return 0
	if (x === 1) return 1
	return x * factorialRec(x - 1)
}

module.exports = factorialRec
