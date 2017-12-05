module.exports = {
    homeScreen: {
        startButton: 'button[class=home-btn]'
    },
    loanPropTypeScreen: {
        loanDropDown: 'select[name=loanDropDown]',
        loanSelectors: {
            optionPurchase: 'option[name=purchase]',
            optionRefi: 'option[name=refi]',
            optionEquity: 'option[name=equity]'
        },
        propDropDown: 'select[name=propDropDown]',
        propSelectors: {
            optionSingle: 'option[name=singleHome]',
            optionTown: 'option[name=townHome]',
            optionCondo: 'option[name=condo]',
            optionMulti: 'option[name=multiHome]',
            optionMobile: 'option[name=mobileHome]'
        },
        nextButton: 'button[name=next]'
    
        },
        cityLocationScreen: {
            cityInput: 'input[name= cityName]',
            nextButton: 'button[name=next]'
        },
        propertyTypeScreen: {
            primaryHomeButton: 'button[name=primary]',
            rentalPropertyButton: 'button[name=rental]',
            secondaryHomeButton: 'button[name=secondary]',
        },
        foundNewHomeScreen: {
            yesButton: 'button[name=yesFound]',
            noButton: 'button[name=noFound]'
        },
        realEstateAgentScreen: {
            yesButton: 'button[name=yesAgent]',
            noButton: 'button[name=noAgent]'
        },
        priceScreen: {
            purchasePrice: 'input[name=purchasePrice]',
            downPayment: 'input[name=downPayment]',
            nextButton: 'button[name=next]'
        },
        creditScoreScreen: {
            excellentButton: 'button[name=excellent]',
            goodButton: 'button[name=good]',
            fairButton: 'button[name=fair]',
            poorButton: 'button[name=poor]'
        },
        bankruptcyOrForeclosureScreen: {
            noButton: 'button[name=noBankruptForeclose]',
            bankruptcyButton: 'button[name=bankrupt]',
            foreclosureButton: 'button[name=foreclosure]',
            bothButton: 'button:[bankruptForeclose]'
        },
        addressScreen: {
            lineOneInput: 'input[name=addressOne]',
            lineTwoInput: 'input[name=addressTwo]',
            lineThreeInput: 'input[name=addressThree]'
        },
        nameScreen: {
            firstNameInput: 'input[name=firstName]',
            lastNameInput: 'input[name=lastName]',
            emailInput: 'input[name=email]'
        },
        overviewFormScreen: {
            name: 'div[name=name] .p2',
            email: 'div[name=email] .p2',
            typeOfLoan: 'div[name=loan] .p2',
            typeOfProperty: 'div[name=property] .p2',
            city: 'div[name=city] .p2',
            loanPropertyType: 'div[name=propertyType] .p2',
            foundNewHome: 'div[name=found] .p2',
            realEstateAgent: 'div[name=agent] .p2',
            purchasePrice: 'div[name=cost] .p2',
            downPayment: 'div[name=downPayment .p2',
            creditScore: 'div[name=credit] .p2',
            bankruptHistory: 'div[name=bankruptcy] .p2',
            currentAddress: 'div[name=address] .p2'
        }
}