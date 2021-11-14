const maxNumberRec = require('./MaxNumberRec')

beforeEach(() => {
	positiveNumbers = [5, 9, 20, 23, 100, 89]
	negativeNumbers = [-1, -5, -6, -9, -100]
	positiveAndNegativeNumbers = [...positiveNumbers, ...negativeNumbers]
})

describe('maxNubmerRec fanction', () => {
	test('should return the maximum number from incoming array with positive numbers ', () => {
		expect(maxNumberRec(positiveNumbers)).toBe(100)
	})
	test('should not return number more than maximum number in array with positive numbers', () => {
		expect(maxNumberRec(positiveNumbers)).not.toBeGreaterThan(100)
	})
	test('should not return number less than maximum number in array with positive numbers', () => {
		expect(maxNumberRec(positiveNumbers)).not.toBeLessThan(100)
	})
	test('should return the maximum number from incoming array with negative numbers ', () => {
		expect(maxNumberRec(negativeNumbers)).toBe(-1)
	})
	test('should not return number more than maximum number in array with negative numbers', () => {
		expect(maxNumberRec(negativeNumbers)).not.toBeGreaterThan(-1)
	})
	test('should not return number less than maximum number in array with negative numbers', () => {
		expect(maxNumberRec(negativeNumbers)).not.toBeLessThan(-1)
	})
	test('should return the maximum number from incoming array with positive and negative numbers ', () => {
		expect(maxNumberRec(positiveAndNegativeNumbers)).toBe(100)
	})
	test('should not return number more than maximum number in array with positive and negative number', () => {
		expect(maxNumberRec(positiveAndNegativeNumbers)).not.toBeGreaterThan(100)
	})
	test('should not return number less than maximum number in array with positive and negative number', () => {
		expect(maxNumberRec(positiveAndNegativeNumbers)).not.toBeLessThan(100)
	})
})
