const sortChoice = require('./SortingByChoice')

beforeEach(() => {
	emptyArray = []

	unSortPositiveNumbers = [205, 9, 23, 100, 89]
	sortPossitiveNumbers = [9, 23, 89, 100, 205]

	unSortNegativeNumbers = [-8, -5, -6, -9, -1]
	sortNegativeNumbers = [-9, -8, -6, -5, -1]

	unSortPositiveAndNegativeNumbers = [205, 9, 23, 100, 89, 9, 23, 89, 100]
	sortPositiveAndNegativeNumbers = [-9, -8, -6, -5, -1, 9, 23, 89, 100, 205]
})

describe('SortChoice function', () => {
	test('should return new arr with sort items', () => {
		expect(sortChoice(unSortPositiveNumbers)).toEqual(sortPossitiveNumbers)
	})
	test('should return new arr with sort items should return new arr with sort items after sort unsort array with neagitve numbers', () => {
		expect(sortChoice(unSortNegativeNumbers)).toEqual(sortNegativeNumbers)
	})
	test('should return new arr with sort items after sort unsort array with neagitve and possitive numbers', () => {
		expect(sortChoice(unSortPositiveAndNegativeNumbers)).toEqual(
			sortPositiveAndNegativeNumbers
		)
	})
	test('should return new arr with sort items', () => {
		expect(sortChoice(emptyArray)).toEqual(emptyArray)
	})
})
