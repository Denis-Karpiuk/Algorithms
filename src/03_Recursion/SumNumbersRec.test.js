const sumNumbersRec = require('./SumNumbersRec')

beforeEach(() => {
	positiveNumbers = [1, 2, 3]
	negativeNumbers = [-1, -2, -3]
	positiveAndNegativeNumbers = [...positiveNumbers, ...negativeNumbers]
})

describe('SumNumbersRec fanction', () => {
	test('should return sum all numbers of array with positive numbers', () => {
		expect(sumNumbersRec(positiveNumbers)).toBe(6)
	})
	test('should not return number more than sum all numbers of array with positive numbers', () => {
		expect(sumNumbersRec(positiveNumbers)).not.toBeGreaterThan(6)
	})
	test('should not return number less than sum all numbers of array with positive numbers', () => {
		expect(sumNumbersRec(positiveNumbers)).not.toBeLessThan(6)
	})
	test('should return sum all numbers of array with negative numbers', () => {
		expect(sumNumbersRec(negativeNumbers)).toBe(-6)
	})
	test('should not return number more than sum all numbers of array with negative numbers', () => {
		expect(sumNumbersRec(negativeNumbers)).not.toBeGreaterThan(-6)
	})
	test('should not return number less than sum all numbers of array with negative numbers', () => {
		expect(sumNumbersRec(negativeNumbers)).not.toBeLessThan(-6)
	})
	test('should return sum all numbers of array with positive and negative and numbers', () => {
		expect(sumNumbersRec(positiveAndNegativeNumbers)).toBe(0)
	})
	test('should not return number more than sum all numbers of array with positive and negative numbers', () => {
		expect(sumNumbersRec(positiveAndNegativeNumbers)).not.toBeGreaterThan(0)
	})
	test('should not return number less than sum all numbers of array with positive and negative', () => {
		expect(sumNumbersRec(positiveAndNegativeNumbers)).not.toBeLessThan(0)
	})
})
