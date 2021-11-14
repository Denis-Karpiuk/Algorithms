//* Key search (recoursion)
function searchKeyRec(box) {
	for (let i = 0; i < box.length; i++) {
		if (box[i] === 'key') {
			console.log('Key found')
		}
		if (Array.isArray(box[i])) {
			searchKeyRec(box[i])
		}
	}
}

module.exports = searchKeyRec
