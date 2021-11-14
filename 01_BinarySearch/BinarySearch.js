//* Binary search - O(log n)
//! Important! Array must be sorted

const sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
function binarySearch(arr, searchElement) {
	let left = 0
	let right = arr.length - 1
	let midle
	while (left <= right) {
		midle = Math.floor((right + left) / 2)
		let midleElement = arr[midle]
		if (midleElement === searchElement) return midle
		if (midleElement > searchElement) right = midle - 1
		if (midleElement < searchElement) left = midle + 1
	}
	return null
}
