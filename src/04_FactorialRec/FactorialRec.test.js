const factorialRec = require('./FactorialRec')

describe('Factorial function', () => {
	test('should retutn factorial incoming number', () => {
		expect(factorialRec(5)).toBe(120)
	})
	test('should retutn 0 if incoming number = 0', () => {
		expect(factorialRec(0)).toBe(0)
	})
	test('should  retutn 1 if incoming number = 1', () => {
		expect(factorialRec(1)).toBe(1)
	})
	test('should return message = Incoming number must be a natural number', () => {
		expect(factorialRec(-5)).toBe('Incoming number must be a natural number')
	})
	test('should not retutn number more than factorial incoming number', () => {
		expect(factorialRec(5)).not.toBeGreaterThan(120)
	})
	test('should not retutn number less than factorial incoming number', () => {
		expect(factorialRec(5)).not.toBeLessThan(120)
	})
})
