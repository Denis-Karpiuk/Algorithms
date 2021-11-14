const countItemsRec = require('./CountItemsRec')

const arr = [1, 3, 5]

describe('CountItemsRec function', () => {
	test('should return count items in array', () => {
		expect(countItemsRec(arr)).toBe(3)
	})
	test('should not return count items more than items in array', () => {
		expect(countItemsRec(arr)).not.toBe(4)
	})
	test('should not return count items less than items in array', () => {
		expect(countItemsRec(arr)).not.toBe(2)
	})
	test('should not return count items = 0 if array containt items', () => {
		expect(countItemsRec(arr)).not.toBe(0)
	})
})
