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
        browser.expect.element(selectors.overviewScreenOutput.nameOutput).text.to.equal('Dallas Killpack')
        browser.expect.element(selectors.overviewScreenOutput.emailOutput).text.to.equal('Dallas@gmail.com')
        browser.expect.element(selectors.overviewScreenOutput.typeOfLoan).text.to.equal('Refinance')
        browser.expect.element(selectors.overviewScreenOutput.propertyType).text.to.equal('Town Home')
        browser.expect.element(selectors.overviewScreenOutput.city).text.to.equal('Salt Lake City')
        browser.expect.element(selectors.overviewScreenOutput.loanPropertyType).text.to.equal('Primary Home')
        browser.expect.element(selectors.overviewScreenOutput.foundNewHome).text.to.equal('True')
        browser.expect.element(selectors.overviewScreenOutput.realEstateAgent).text.to.equal('True')
        browser.expect.element(selectors.overviewScreenOutput.purchasePrice).text.to.equal('1,000,000')
        browser.expect.element(selectors.overviewScreenOutput.downPayment).text.to.equal('100,000')
        browser.expect.element(selectors.overviewScreenOutput.creditScore).text.to.equal('Excellent')
        browser.expect.element(selectors.overviewScreenOutput.bankruptcyHistory).text.to.equal('Has never been in bankruptcy')
        browser.expect.element(selectors.overviewScreenOutput.currentAddress).text.to.contain('4716 Kemper Lane Salt Lake City 84104')
            browser
            .click(selectors.overviewScreen.sendButton)
            .click(selectors.thankYouScreen.homeButton)
    },
    
    'Test bad Data "send"': (browser) => {
        browser
            .click(selectors.homeScreen.startButton)
            .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 1000)
            //click in loan type dropdown and choose refinance, click in type of property dropdown and choose townhome
            .click(`${selectors.loanPropTypeScreen.loanSelectors.optionEquity}`)
            .click(`${selectors.loanPropTypeScreen.propSelectors.optionMulti}`)
            .click(selectors.loanPropTypeScreen.nextButton)
            // City Location Screen. Enter city name
            .waitForElementVisible(selectors.cityPropLocatedScreen.cityName, 1000)
        functions.input(selectors.cityPropLocatedScreen.cityName, data.badData.cityPropLocatedScreen.inputCityName, browser)
        browser
            .click(selectors.cityPropLocatedScreen.wTwoButton)
            // Property Loan Screen, Click on loan use
            .waitForElementVisible(selectors.whatPropLoanScreen.whatPropText, 1000)
            .click(selectors.whatPropLoanScreen.secondary)
            // Found new home screen
            .waitForElementVisible(selectors.foundNewHomeScreen.foundHomeText, 1000)
            .click(selectors.foundNewHomeScreen.noFound)
            // Real estate agent screen
            .waitForElementVisible(selectors.realEstateAgentScreen.realEstateText, 1000)
            .click(selectors.realEstateAgentScreen.noAgent)
            // Purchase price/down payment screen
            .waitForElementVisible(selectors.priceDownPaymentScreen.downPaymentText, 1000)
        functions.input(selectors.priceDownPaymentScreen.purchasePrice, data.badData.priceDownPaymentScreen.inputEstimatedPrice, browser)
        functions.input(selectors.priceDownPaymentScreen.downPayment, data.badData.priceDownPaymentScreen.inputDownPayment, browser)
        browser
            .click(selectors.priceDownPaymentScreen.wSixButton)
            // Estimate credit score
            .waitForElementVisible(selectors.creditScoreScreen.creditScoreText, 1000)
            .click(selectors.creditScoreScreen.fair)
            // Forclosure screen
            .waitForElementVisible(selectors.bankForeScreen.bankForeText, 1000)
            .click(selectors.bankForeScreen.both)
            // Address screen
            .waitForElementVisible(selectors.addressScreen.addressText, 1000)
        functions.input(selectors.addressScreen.addressOne, data.badData.addressScreen.inputAddressLineOne, browser)
        functions.input(selectors.addressScreen.addressTwo, data.badData.addressScreen.inputAddressLineTwo, browser)
        functions.input(selectors.addressScreen.addressThree, data.badData.addressScreen.inputAddressLineThree, browser)
        browser
            .click(selectors.addressScreen.marginButton)
        // Name screen
            .waitForElementVisible(selectors.nameScreen.nameText, 1000)
        functions.input(selectors.nameScreen.firstName, data.badData.nameScreen.inputNameLineOne, browser)
        functions.input(selectors.nameScreen.lastName, data.badData.nameScreen.inputLastLineTwo, browser)
        functions.input(selectors.nameScreen.email, data.badData.nameScreen.inputEmailLineThree, browser)
        browser
            .click(selectors.nameScreen.marginButton)
            // Overview
        browser.expect.element(selectors.overviewScreenOutput.nameOutput).text.to.equal('12345 123notlastname')
        browser.expect.element(selectors.overviewScreenOutput.emailOutput).text.to.equal('invalidemail')
        browser.expect.element(selectors.overviewScreenOutput.typeOfLoan).text.to.equal('Home Equity')
        browser.expect.element(selectors.overviewScreenOutput.propertyType).text.to.equal('Multi Family Dwelling')
        browser.expect.element(selectors.overviewScreenOutput.city).text.to.equal('asdfasdf')
        browser.expect.element(selectors.overviewScreenOutput.loanPropertyType).text.to.equal('Secondary Home')
        browser.expect.element(selectors.overviewScreenOutput.foundNewHome).text.to.equal('False')
        browser.expect.element(selectors.overviewScreenOutput.realEstateAgent).text.to.equal('False')
        browser.expect.element(selectors.overviewScreenOutput.purchasePrice).text.to.equal('invalidinformation')
        browser.expect.element(selectors.overviewScreenOutput.downPayment).text.to.equal('invalidinformation')
        browser.expect.element(selectors.overviewScreenOutput.creditScore).text.to.equal('Fair')
        browser.expect.element(selectors.overviewScreenOutput.bankruptcyHistory).text.to.equal('Has had both a foreclosure and a bankruptcy')
        browser.expect.element(selectors.overviewScreenOutput.currentAddress).text.to.contain('thisisaninvalidaddress')
        browser
            .click(selectors.overviewScreen.sendButton)
    },
            
        'Test bad Data "start again"': (browser) => {
                browser
                    .click(selectors.homeScreen.startButton)
                    .waitForElementVisible(selectors.loanPropTypeScreen.loanDropDown, 1000)
                    //click in loan type dropdown and choose refinance, click in type of property dropdown and choose townhome
                    .click(`${selectors.loanPropTypeScreen.loanSelectors.optionEquity}`)
                    .click(`${selectors.loanPropTypeScreen.propSelectors.optionMulti}`)
                    .click(selectors.loanPropTypeScreen.nextButton)
                    // City Location Screen. Enter city name
                    .waitForElementVisible(selectors.cityPropLocatedScreen.cityName, 1000)
                functions.input(selectors.cityPropLocatedScreen.cityName, data.badData.cityPropLocatedScreen.inputCityName, browser)
                browser
                    .click(selectors.cityPropLocatedScreen.wTwoButton)
                    // Property Loan Screen, Click on loan use
                    .waitForElementVisible(selectors.whatPropLoanScreen.whatPropText, 1000)
                    .click(selectors.whatPropLoanScreen.secondary)
                    // Found new home screen
                    .waitForElementVisible(selectors.foundNewHomeScreen.foundHomeText, 1000)
                    .click(selectors.foundNewHomeScreen.noFound)
                    // Real estate agent screen
                    .waitForElementVisible(selectors.realEstateAgentScreen.realEstateText, 1000)
                    .click(selectors.realEstateAgentScreen.noAgent)
                    // Purchase price/down payment screen
                    .waitForElementVisible(selectors.priceDownPaymentScreen.downPaymentText, 1000)
                functions.input(selectors.priceDownPaymentScreen.purchasePrice, data.badData.priceDownPaymentScreen.inputEstimatedPrice, browser)
                functions.input(selectors.priceDownPaymentScreen.downPayment, data.badData.priceDownPaymentScreen.inputDownPayment, browser)
                browser
                    .click(selectors.priceDownPaymentScreen.wSixButton)
                    // Estimate credit score
                    .waitForElementVisible(selectors.creditScoreScreen.creditScoreText, 1000)
                    .click(selectors.creditScoreScreen.fair)
                    // Forclosure screen
                    .waitForElementVisible(selectors.bankForeScreen.bankForeText, 1000)
                    .click(selectors.bankForeScreen.both)
                    // Address screen
                    .waitForElementVisible(selectors.addressScreen.addressText, 1000)
                functions.input(selectors.addressScreen.addressOne, data.badData.addressScreen.inputAddressLineOne, browser)
                functions.input(selectors.addressScreen.addressTwo, data.badData.addressScreen.inputAddressLineTwo, browser)
                functions.input(selectors.addressScreen.addressThree, data.badData.addressScreen.inputAddressLineThree, browser)
                browser
                    .click(selectors.addressScreen.marginButton)
                // Name screen
                    .waitForElementVisible(selectors.nameScreen.nameText, 1000)
                functions.input(selectors.nameScreen.firstName, data.badData.nameScreen.inputNameLineOne, browser)
                functions.input(selectors.nameScreen.lastName, data.badData.nameScreen.inputLastLineTwo, browser)
                functions.input(selectors.nameScreen.email, data.badData.nameScreen.inputEmailLineThree, browser)
                browser
                    .click(selectors.nameScreen.marginButton)
                    // Overview
                browser.expect.element(selectors.overviewScreenOutput.nameOutput).text.to.equal('12345 123notlastname')
                browser.expect.element(selectors.overviewScreenOutput.emailOutput).text.to.equal('invalidemail')
                browser.expect.element(selectors.overviewScreenOutput.typeOfLoan).text.to.equal('Home Equity')
                browser.expect.element(selectors.overviewScreenOutput.propertyType).text.to.equal('Multi Family Dwelling')
                browser.expect.element(selectors.overviewScreenOutput.city).text.to.equal('asdfasdf')
                browser.expect.element(selectors.overviewScreenOutput.loanPropertyType).text.to.equal('Secondary Home')
                browser.expect.element(selectors.overviewScreenOutput.foundNewHome).text.to.equal('False')
                browser.expect.element(selectors.overviewScreenOutput.realEstateAgent).text.to.equal('False')
                browser.expect.element(selectors.overviewScreenOutput.purchasePrice).text.to.equal('invalidinformation')
                browser.expect.element(selectors.overviewScreenOutput.downPayment).text.to.equal('invalidinformation')
                browser.expect.element(selectors.overviewScreenOutput.creditScore).text.to.equal('Fair')
                browser.expect.element(selectors.overviewScreenOutput.bankruptcyHistory).text.to.equal('Has had both a foreclosure and a bankruptcy')
                browser.expect.element(selectors.overviewScreenOutput.currentAddress).text.to.contain('thisisaninvalidaddress')
                browser
                    .click(selectors.overviewScreen.startOver)
            }
        }
