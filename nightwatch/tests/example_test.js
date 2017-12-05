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
        // Property Loan screen, Click on loan use
            .waitForElementVisible(selectors.whatPropLoanScreen.whatPropText, 1000)
            .click(selectors.whatPropLoanScreen.primary)
        // Found new home screen
            .waitForElementVisible(selectors.foundNewHomeScreen.foundHomeText, 1000)
            .click(selectors.foundNewHomeScreen.yesFound)
        // Real estate agent screen
            .waitForElementVisible(selectors.realEstateAgentScreen.realEstateText, 1000)
            .click(selectors.realEstateAgentScreen.yesAgent)
        // Price down payment screen
            .waitForElementVisible(selectors.priceDownPaymentScreen.downPaymentText, 1000)
        functions.input(selectors.priceDownPaymentScreen.purchasePrice, data.goodData.priceDownPaymentScreen.inputEstimatedPrice, browser)
        functions.input(selectors.priceDownPaymentScreen.downPayment, data.goodData.priceDownPaymentScreen.inputDownPayment, browser)
        browser
            .click(selectors.priceDownPaymentScreen.wSixButton)
        // Estimate your credit score screen
            .waitForElementVisible(selectors.creditScoreScreen.creditScoreText, 1000)
            .click(selectors.creditScoreScreen.excellent)
        // Bankruptcy and Foreclosure screen
            .waitForElementVisible(selectors.bankForeScreen.bankForeText, 1000)
            .click(selectors.bankForeScreen.noBankruptForeclose)
        // Address screen
            .waitForElementVisible(selectors.addressScreen.addressText, 1000)
        functions.input(selectors.addressScreen.addressOne, data.goodData.addressScreen.inputAddressLineOne, browser)
        functions.input(selectors.addressScreen.addressTwo, data.goodData.addressScreen.inputAddressLineTwo, browser)
        functions.input(selectors.addressScreen.addressThree, data.goodData.addressScreen.inputAddressLineThree, browser)
            browser
            .click(selectors.addressScreen.marginButton)
        // Name screen
            .waitForElementVisible(selectors.nameScreen.nameText, 1000)
        functions.input(selectors.nameScreen.firstName, data.goodData.nameScreen.inputNameLineOne, browser)
        functions.input(selectors.nameScreen.lastName, data.goodData.nameScreen.inputLastLineTwo, browser)
        functions.input(selectors.nameScreen.email, data.goodData.nameScreen.inputEmailLineThree, browser)
            browser
            .click(selectors.nameScreen.marginButton)
        // Overview form page
            .pause(6000)
        browser.expect.element(selectors.overviewScreenOutput.nameOutput).text.to.equal('Dallas Killpack')
        browser.expect.element(selectors.overviewScreenOutput.emailOutput).text.to.equal('Dallas@gmail.com')
        browser.expect.element(selectors.overviewScreenOutput.typeOfLoan).text.to.equal('Refinance')
        browser.expect.element(selectors.overviewScreenOutput.propertyType).text.to.equal('Town Home')
        browser.expect.element(selectors.overviewScreenOutput.city).text.to.contain('Salt Lake City')
        browser.expect.element(selectors.overviewScreenOutput.loanPropertyType).text.to.contain('Primary Home')
        browser.expect.element(selectors.overviewScreenOutput.foundNewHome).text.to.contain('True')
        browser.expect.element(selectors.overviewScreenOutput.realEstateAgent).text.to.contain('True')
        browser.expect.element(selectors.overviewScreenOutput.purchasePrice).text.to.contain('1,000,000')
        browser.expect.element(selectors.overviewScreenOutput.downPayment).text.to.contain('100,000')
        browser.expect.element(selectors.overviewScreenOutput.creditScore).text.to.contain('Excellent')
        browser.expect.element(selectors.overviewScreenOutput.bankruptcyHistory).text.to.contain('Has never been in bankruptcy')
        browser.expect.element(selectors.overviewScreenOutput.currentAddress).text.to.contain('4716 Kemper Lane Salt Lake City 84104')
            browser
            .click(selectors.overviewScreen.sendButton)
    }
}