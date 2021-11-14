//* Binary search - O(log n)
//! Important! Array must be sorted

function binarySearch(arr, searchElement) {
	let left = 0
	let right = arr.length - 1
	let middleIndex
	while (left <= right) {
		middleIndex = Math.floor((left + right) / 2)
		let middleElement = arr[middleIndex]
		if (searchElement === middleElement) return middleIndex
		if (searchElement > middleElement) left = middleIndex + 1
		if (searchElement < middleElement) right = middleIndex - 1
	}
	return null
}

module.exports = binarySearch
