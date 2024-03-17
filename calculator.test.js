const assert = require('assert')
const calculator = require('./calculator')

describe('Testing basic functionallity of the calculator', () => {
    // test 1
    // test 2
    // test 3

    it('add simple adding numbers [1, 1]', () => {
        // AAA
        const actual = calculator.add(1, 1);
        const expected = 2

        assert.strictEqual(expected, actual)
    })

    // sub

    // mul

    // div
})