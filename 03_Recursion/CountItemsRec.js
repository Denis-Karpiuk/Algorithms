//* Counting the number of elements in an array

function countItems(arr) {
	if (arr.length === 0) return 0
	return 1 + countItems(arr.slice(1))
}
