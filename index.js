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

console.log(quickSort([16, 9]))
console.log(quickSort([-8, -5, -6, -9, -1]))
console.log(quickSort([-8, -5, -6, -9, -1, 16, 9, 23, 4]))
