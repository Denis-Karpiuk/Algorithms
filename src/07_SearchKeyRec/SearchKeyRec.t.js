const searchKeyRec = require('./searchKeyRec')

beforeEach(() => {
	arrayWithKey = ['notKey', 'notKey', 'notKey', ['key']]
	arrayWithoutKey = ['notKey', 'notKey', 'notKey']
})

describe('SearchKeyRec function', () => {
	test('should print in console string = `Key found`, form array with key', () => {
		expect(searchKeyRec(arrayWithKey)).toBe('key found')
	})
})
