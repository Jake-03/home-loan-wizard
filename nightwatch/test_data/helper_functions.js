// Types in value into input found by selector.
// Expects the input's text to match expected value.
// If expected value is not supplied value is used instead.
const input = (selector, value, browser, expectedValue) => {
    if (expectedValue === undefined) {
        expectedValue = value
    }
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .expect.element(selector).to.have.value.that.equals(expectedValue)
}
const clickOption = (dropdownSelector, optionSelector, browser) => {
    browser
        .click(`${dropdownSelector} ${optionSelector}`)
}
module.exports = {
    input: input,
    clickOption: clickOption
}