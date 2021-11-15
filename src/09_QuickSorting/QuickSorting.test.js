const quickSorting = require('./QuickSorting')

beforeEach(() => {
	unSortPositiveNumbers = [9, 3, 1]
	sortPossitiveNumbers = [1, 3, 9]

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

describe('QuickSorting function', () => {
	test('should return new array with sort items, incoming array with unsort positive numbers', () => {
		expect(unSortPositiveNumbers).toEqual(sortPossitiveNumbers)
	})
	// test('should return new array with sort items, incoming array with unsort negative numbers', () => {
	// 	expect(unSortNegativeNumbers).toEqual(sortNegativeNumbers)
	// })
	// test('should return new array with sort items, incoming array with unsort positive and negative numbers', () => {
	// 	expect(unSortPositiveAndNegativeNumbers).toEqual(
	// 		sortPositiveAndNegativeNumbers
	// 	)
	// })
	test('should return new empty array with, incoming empty array', () => {
		expect(emptyArray).toEqual(emptyArray)
	})
	test('should return new array with one item, incoming array with one item', () => {
		expect(arrayWithOneItem).toEqual(arrayWithOneItem)
	})
})
