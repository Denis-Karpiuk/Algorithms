const searchKeyCycle = require('./SearchKeyCycle')

beforeEach(() => {
	arrayWithKey = ['notKey', 'notKey', 'notKey', ['key']]
	arrayWithoutKey = ['notKey', 'notKey', 'notKey']
})

describe('SearchKeyCycle function', () => {
	test('should return string = key found, form array with key', () => {
		expect(searchKeyCycle(arrayWithKey)).toEqual('key found')
	})
	test('should not return string = key found, form array without key', () => {
		expect(searchKeyCycle(arrayWithoutKey)).not.toEqual('key found')
	})
	test('should return string = not key, form array array without key', () => {
		expect(searchKeyCycle(arrayWithoutKey)).toEqual('not key')
	})
	test('should not return string = not key, form array with key', () => {
		expect(searchKeyCycle(arrayWithKey)).not.toEqual('not key')
	})
})
