//* Key search (normal cycle)

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
