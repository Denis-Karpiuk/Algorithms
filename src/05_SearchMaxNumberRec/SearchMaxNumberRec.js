//* Recursion to find the largest number in an array

function searchmaxNumberRec(arr) {
	if (arr.length === 2) {
		if (arr[0] > arr[1]) return arr[0]
		return arr[1]
	}

	let subMax = searchmaxNumberRec(arr.slice(1))
	if (arr[0] > subMax) return arr[0]
	return subMax
}

module.exports = searchmaxNumberRec
