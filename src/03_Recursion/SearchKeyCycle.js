//* Key search (normal cycle)

function searchKeyCycle(arr) {
	let allBoxes = [...arr]
	for (let i = 0; i < allBoxes.length; i++) {
		if (allBoxes[i] === 'key') {
			return 'key found'
		} else if (Array.isArray(allBoxes[i])) {
			allBoxes.push(allBoxes[i][0])
		}
	}
	return 'not key'
}

module.exports = searchKeyCycle
