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
function smalestItem(array) {
	let item = array[0]
	for (let i = 0; i < array.length; i++) {
		const element = array[i]
		if (element < item) item = element
	}
	return item
}

function sotrArray(arr) {
	let array = arr
	let newArr = []
	for (let i = 0; i < array.length; i++) {
		// дописать код
	}
	return newArr
}

console.log(sotrArray(numbersArray))

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
function fact(num) {
	if (num === 1) return 1
	return num * fact(num - 1)
}
