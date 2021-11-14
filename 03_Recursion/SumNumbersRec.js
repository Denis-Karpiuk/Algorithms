//* Рекурсия для суммирования чисел массива
const numbers = [10, 2, 6, 4, 7]
function sumNumbers(arr) {
	if (arr.length === 0) return 0
	return arr.shift() + sumNumbers(arr)
}
