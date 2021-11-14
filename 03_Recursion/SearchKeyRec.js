//* Key search (recoursion)
function searchKeyRec(box) {
	for (let i = 0; i < box.length; i++) {
		if (Array.isArray(box[i])) {
			searchKeyRec(box[i])
		} else if (box[i] === 'key') {
			console.log('key found')
		}
	}
}
