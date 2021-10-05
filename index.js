//* Бинарный поиск

const sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const binarySearch = (arr, elem) => {
	let start = 0
	let end = arr.length - 1
	while (start < end) {
		let midle = Math.floor((start + end) / 2)
		let guess = arr[midle]

		if (guess === elem) return midle
		if (guess > elem) {
			end = midle - 1
		} else {
			if (guess < elem) {
				start = midle + 1
			}
		}
	}
	return null
}
