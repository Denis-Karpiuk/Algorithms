const binarySearch = require('./BinarySearch')

beforeEach(() => {
	sortArrayPossitiveNumbers = [1, 2, 3, 4, 5]
	sortArrayNegativeNumbers = [-5, -4, -3, -2, -1]
	sortArrayNegativeAndPossitiveNumbers = [
		...sortArrayNegativeNumbers,
		...sortArrayPossitiveNumbers,
	]
})

describe('BinarySearch', () => {
	test('should return index item from sort array with possitive numbers', () => {
		expect(binarySearch(sortArrayPossitiveNumbers, 1)).toBe(0)
	})
	test('should return index item from sort array with negative numbers', () => {
		expect(binarySearch(sortArrayNegativeNumbers, -2)).toBe(3)
	})
	test('should return index item from sort array with possitive and negative numbers', () => {
		expect(binarySearch(sortArrayNegativeAndPossitiveNumbers, -3)).toBe(2)
	})
	test('should return index item from sort array with possitive and negative numbers', () => {
		expect(binarySearch(sortArrayNegativeAndPossitiveNumbers, 4)).toBe(8)
	})
})
