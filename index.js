//! Бинарный поиск O(log n)
//* Обязательное условие, массив дожен быть отсортирован
const sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1
	let midle

	while (left <= right) {
		midle = Math.floor((right + left) / 2)
		let guess = arr[midle]

		if (guess > target) right = midle - 1
		if (guess < target) left = midle + 1
		if (guess === target) return midle
	}
	return null
}
//! Сортировка выбором O(n2)
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

//! =====Рекурсия=====
//*Поиск ключа -  Обычный цикл
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

//*Поиск ключа - Рекурсия
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
