const add = require("./Math");

test('add 2 + 3 = 5', () => {
    expect(add(2,3)).toBe(5)
})
test('add 10.4 + 10.6 = 5', () => {
    expect(add(10.6,10.4)).toBe(21)
})

