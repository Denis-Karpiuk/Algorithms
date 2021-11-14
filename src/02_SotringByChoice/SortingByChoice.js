//* Sorting by choice - O(n2)

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

module.exports = sortChoice
