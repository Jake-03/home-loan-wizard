module.exports = {
    transactions: {
        firstEntry: {
            loanType: 'optionPurchase', //purchase loan, the string is the property key for the loan type dropdown in my selector file
            loanType: 'optionRefi',
            loanType: 'optionEquity',
            propType: 'optionCondo', //condo home, the string is the property key for the property type dropdown in my selector file
            propType: 'optionSingle',
            propType: 'optionTown',
            propType: 'optionMulti',
            propType: 'optionMobile',
        },
    },
    goodData: {
        cityPropLocatedScreen: {
            inputCityName: 'Salt Lake City'
        },
        priceDownPaymentScreen: {
            inputEstimatedPrice: '1000000',
            inputDownPayment: '100000',
        },
        addressScreen: {
            inputAddressLineOne: '4716 Kemper Lane Salt Lake City 84104',
            inputAddressLineTwo: '4716 Kemper Lane Salt Lake City 84104',
            inputAddressLineThree: '4716 Kemper Lane Salt Lake City 84104',
        },
        nameScreen: {
            inputNameLineOne: 'Dallas',
            inputLastLineTwo: 'Killpack',
            inputEmailLineThree: 'Dallas@gmail.com',
        },
    },
    badData: {
        cityPropLocatedScreen: {
            inputCityName: '12345*$%$'
        },
        priceDownPaymentScreen: {
            inputEstimatedPrice: 'invalidinformation',
            inputDownPayment: 'invalidinformation',
        },
        addressScreen: {
            inputAddressLineOne: 'thisisaninvalidaddress',
            inputAddressLineTwo: 'thisisaninvalidaddress',
            inputAddressLineThree: 'thisisaninvalidaddress',
        },
        nameScreen: {
            inputNameLineOne: '12345',
            inputLastLineTwo: '123notlastname',
            inputEmailLineThree: 'invalidemail',
        }
    }
}