module.exports = {
    goodData: {
        t1: {
            name: 'A',
            phone: '1234567890',
            title: 'h'
        },
        transaction2: {
            name: '123456789012345678901234567890',
            phone: '1234567890',
            title: '123456789012345678901234567890',
        },


    },

    badData: {

        nineDigits: {
            name: 'i',
            phone: '123456789',
            title: 'e',
        },

        elevenDigits: {
            name: 'i',
            phone: '12345678901',
            title: 'e'

        },

        SavingBlank: {
            name: 'nan',
            phone: 'nan',
            title: 'nan',
        },

        breakingName: {
            name: '1234567890123456789012345678901',
            phone: '1234567890',
            title: 'e'

        },
        errorMessage:{
            errorCard :'div[class="errorCard"]',
        },

        breakingTitle: {
            name: 'i',
            phone: '1234567890',
            title: '1234567890123456789012345678901',
        },

        numberOnly: {
            name: 'i',
            phone: 'abc',
            title: 'i',
        },

        savingInfo: {
            name: ''
        }

    },
    CheckID: {
        bO: 'ID: 1',
        mB: 'ID: 2',
        pW: 'ID: 3',
        tO: 'ID: 4',
        dB: 'ID: 5',
        hW: 'ID: 6',
        rE: 'ID: 7',
        lW: 'ID: 8',
        eS: 'ID: 9',
        lB: 'ID: 10',
    },


}        