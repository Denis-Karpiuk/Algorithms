//!  #1 Бинарный поиск O(log n)
//* Обязательное условие, массив дожен быть отсортирован
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
//! #2 Сортировка выбором O(n2)
const numbersArray = [3, 7, 9, 8, 2]

function findeSmallestItem(arr) {
	let item = arr[0]
	let index = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < item) {
			index = i
		}
	}
	return index
}

function sortChoice(arr) {
	let result = []
	let length = arr.length
	for (let i = 0; i < length; i++) {
		let smallest = findeSmallestItem(arr)
		result.push(arr.splice(smallest, 1)[0])
	}
	return result
}

//! #3 Рекурсия
//* Поиск ключа -  Обычный цикл
let boxes = ['notKey', 'notKey', 'notKey', ['key']]
function searchKey(boxes) {
	let allBoxes = [...boxes]
	for (let i = 0; i < allBoxes.length; i++) {
		if (allBoxes[i] === 'key') {
			return 'key found'
		} else if (Array.isArray(allBoxes[i])) {
			allBoxes.push(allBoxes[i][0])
		}
	}
	return 'not key'
}

//* Поиск ключа - Рекурсия
function searchKeyRec(box) {
	for (let i = 0; i < box.length; i++) {
		if (Array.isArray(box[i])) {
			searchKeyRec(box[i])
		} else if (box[i] === 'key') {
			console.log('key found')
		}
	}
}

//* Факториал - рекурсия.
function fact(x) {
	if (x === 1) return 1
	return x * fact(x - 1)
}

//! #4 Быстрая сортировка
//* Рекурсия для суммирования чисел массива
const numbers = [10, 2, 6, 4, 7]
function sumNumbers(arr) {
	if (arr.length === 0) return 0
	return arr.shift() + sumNumbers(arr)
}
//* Рекурсия для подсчёта количества элемнтов в массиве
function countItems(arr) {
	if (arr.length === 0) return 0
	return 1 + countItems(arr.slice(1))
}
//* Рекурсия для нахождения самого большого числа в массиве
function maxNumber(arr) {
	if (arr.length === 2) {
		if (arr[0] > arr[1]) return arr[0]
		return arr[1]
	}

	let subMax = maxNumber(arr.slice(1))
	if (arr[0] > subMax) return arr[0]
	return subMax
}

//* Быстрая сортировка O(n log(n))
function quickSort(arr) {
	if (arr.length < 2) return arr
	let pivot = arr[0]
	let newArr = arr.slice(1)
	let less = []
	let more = []
	for (let element of newArr) {
		if (element <= pivot) less.push(element)
		if (element > pivot) more.push(element)
	}
	return [...quickSort(less), pivot, ...quickSort(more)]
}
