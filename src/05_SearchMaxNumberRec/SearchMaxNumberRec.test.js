const searchmaxNumberRec = require('./SearchmaxNumberRec')

beforeEach(() => {
	positiveNumbers = [5, 9, 20, 23, 100, 89]
	negativeNumbers = [-1, -5, -6, -9, -100]
	positiveAndNegativeNumbers = [...positiveNumbers, ...negativeNumbers]
})

describe('maxNubmerRec fanction', () => {
	test('should return the maximum number from incoming array with positive numbers ', () => {
		expect(searchmaxNumberRec(positiveNumbers)).toBe(100)
	})
	test('should not return number more than maximum number in array with positive numbers', () => {
		expect(searchmaxNumberRec(positiveNumbers)).not.toBeGreaterThan(100)
	})
	test('should not return number less than maximum number in array with positive numbers', () => {
		expect(searchmaxNumberRec(positiveNumbers)).not.toBeLessThan(100)
	})
	test('should return the maximum number from incoming array with negative numbers ', () => {
		expect(searchmaxNumberRec(negativeNumbers)).toBe(-1)
	})
	test('should not return number more than maximum number in array with negative numbers', () => {
		expect(searchmaxNumberRec(negativeNumbers)).not.toBeGreaterThan(-1)
	})
	test('should not return number less than maximum number in array with negative numbers', () => {
		expect(searchmaxNumberRec(negativeNumbers)).not.toBeLessThan(-1)
	})
	test('should return the maximum number from incoming array with positive and negative numbers ', () => {
		expect(searchmaxNumberRec(positiveAndNegativeNumbers)).toBe(100)
	})
	test('should not return number more than maximum number in array with positive and negative number', () => {
		expect(searchmaxNumberRec(positiveAndNegativeNumbers)).not.toBeGreaterThan(
			100
		)
	})
	test('should not return number less than maximum number in array with positive and negative number', () => {
		expect(searchmaxNumberRec(positiveAndNegativeNumbers)).not.toBeLessThan(100)
	})
})
