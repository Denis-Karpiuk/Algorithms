//* Counting the number of elements in an array

function countItemsRec(arr) {
	if (arr.length === 0) return 0
	return 1 + countItemsRec(arr.slice(1))
}

module.exports = countItemsRec
