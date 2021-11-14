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
