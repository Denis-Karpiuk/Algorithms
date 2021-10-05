//* Бинарный поиск

const sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function binarySearch(arr, elem) {
	let left = 0
	let right = arr.length - 1
	let midle = Math.round((left + right) / 2)

	console.log(left, right, midle)
	while (left <= right) {
		let guess = arr[midle]

		if (guess === elem) {
			return midle
		} else if (guess > elem) {
			right = midle - 1
		} else if (guess < elem) {
			left = midle + 1
		}
	}
	return -1
}

const result = binarySearch(sortArray, 2)
console.log(result)
