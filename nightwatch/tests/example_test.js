const functions = require('../test_data/helper_functions')
const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    // 'I can put data in the first screen' : (browser) => {
    //     browser
    //     .click(selectors.homeScreen.startButton)
    //     .waitForElementNotPresent(selectors.homeScreen.startButton, 1000)
    //     .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 1000)
    // //click the right option in the loantype dropdown, then the option selectors, with the field I want chosen (from my test data)
    // functions.clickOption(selectors.loanPropTypeScreen.loanDropDown, selectors.loanPropTypeScreen.loanSelectors[data.transactions.firstEntry.loanType], browser)
    // //click the right option in the proptype dropdown, then the option selectors, with the field I want chosen (from my test data)
    // functions.clickOption(selectors.loanPropTypeScreen.propDropDown, selectors.loanPropTypeScreen.propSelectors[data.transactions.firstEntry.propType], browser)

    // //now leave the screen
    // browser
    //     .click(selectors.loanPropTypeScreen.nextButton)
    //     .waitForElementNotPresent(selectors.loanPropTypeScreen.loanDropDown, 1000)
    // }
    'Test good Data': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 1000)
            //click in loan type dropdown and choose refinance, click in type of property dropdown and choose townhome
            .click(`${selectors.loanPropTypeScreen.loanSelectors.optionRefi}`)
            .click(`${selectors.loanPropTypeScreen.propSelectors.optionTown}`)
            .click(selectors.loanPropTypeScreen.nextButton)
        // City Location Screen. Enter city name
            .waitForElementVisible(selectors.cityPropLocatedScreen.cityName, 1000)
        functions.input(selectors.cityPropLocatedScreen.cityName, data.goodData.cityPropLocatedScreen.inputCityName, browser)
        browser
            .click(selectors.cityPropLocatedScreen.wTwoButton)
        // Property Loan Screen, Click on loan use
            .waitForElementVisible(selectors.whatPropLoanScreen.whatPropText, 1000)
            .click(selectors.whatPropLoanScreen.primary)
        // Found new home screen
            .waitForElementVisible(selectors.foundNewHomeScreen.foundHomeText, 1000)
            .click(selectors.foundNewHomeScreen.yesFound)
        // Real estate agent screen
            .waitForElementVisible(selectors.realEstateAgentScreen.realEstateText, 1000)
            click(selectors.realEstateAgentScreen.yesAgent)
    }
}