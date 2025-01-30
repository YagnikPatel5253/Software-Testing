const reverseString = require('./stringUtils')

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh')
})