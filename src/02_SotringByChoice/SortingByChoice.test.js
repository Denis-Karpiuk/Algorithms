const sortChoice = require('./SortingByChoice')

beforeEach(() => {
	unSortPositiveNumbers = [16, 9, 23, 4]
	sortPossitiveNumbers = [4, 9, 16, 23]

	unSortNegativeNumbers = [-8, -5, -6, -9, -1]
	sortNegativeNumbers = [-9, -8, -6, -5, -1]

	unSortPositiveAndNegativeNumbers = [
		...unSortNegativeNumbers,
		...unSortPositiveNumbers,
	]
	sortPositiveAndNegativeNumbers = [
		...sortNegativeNumbers,
		...sortPossitiveNumbers,
	]
	emptyArray = []

	arrayWithOneItem = [5]
	newArrayWithOneItem = [5]
})

describe('SortChoice function', () => {
	test('should return new arr with sort items, incoming unsort array with  positive numbers', () => {
		expect(sortChoice(unSortPositiveNumbers)).toEqual(sortPossitiveNumbers)
	})
	test('should return new arr with sort items, incoming unsort array with negative numbers', () => {
		expect(sortChoice(unSortNegativeNumbers)).toEqual(sortNegativeNumbers)
	})
	test('should return new arr with sort items, incoming unsort array with possitive and negative numbers ', () => {
		expect(sortChoice(unSortPositiveAndNegativeNumbers)).toEqual(
			sortPositiveAndNegativeNumbers
		)
	})
	test('should return empty array, incoming empty array', () => {
		expect(sortChoice(emptyArray)).toEqual(emptyArray)
	})
	test('should return array with one item, incoming array with one item', () => {
		expect(sortChoice(arrayWithOneItem)).toEqual(newArrayWithOneItem)
	})
})
