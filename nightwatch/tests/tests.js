const selectors = require('../data_file/selectors')
const functions = require('../data_file/functions')
const data = require('../data_file/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Changing and Saving Info': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.nameF)
            .setValue(selectors.feilds.nameF, data.goodData.t1.name)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.goodData.t1.phone)
            .clearValue(selectors.feilds.titleF)
            .setValue(selectors.feilds.titleF, data.goodData.t1.title)
            .click(selectors.buttons.Save)
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
            .click(selectors.feilds.nameF)
            .waitForElementVisible(selectors.feilds.nameF, 9000)
        browser.expect.element(selectors.feilds.nameF).value.to.contain('A')
    },
    'Nine Digit Phone Number': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.badData.nineDigits.phone)
            .click(selectors.buttons.Save)
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
            .click(selectors.feilds.phoneF)
        browser.expect.element(selectors.feilds.phoneF).value.to.not.equal('123456789')


    },
    'Saving No Info': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.nameF)
            .clearValue(selectors.feilds.phoneF)
            .clearValue(selectors.feilds.titleF)
            .click(selectors.buttons.Save)
            .expect.element(selectors.buttons.Save).to.not.be.enabled
    },
    'Breaking Title Field': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.titleF)
            .setValue(selectors.feilds.titleF, data.badData.breakingTitle.title)
            .click(selectors.buttons.Save)
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
            .click(selectors.feilds.titleF)
        browser.expect.element(selectors.feilds.titleF).value.to.equal('1234567890123456789012345678901')

    },
    'Elevn Digit Number': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.badData.elevenDigits.phone)
            .click(selectors.buttons.Save)
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
            .click(selectors.feilds.phoneF)
        console.log(selectors.feilds.phoneF)
        browser.expect.element(selectors.feilds.phoneF).value.to.not.equal('12345678901')


    },
    'Breaking Name Field': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.nameF)
            .setValue(selectors.feilds.nameF, data.badData.breakingName.name)
            .click(selectors.buttons.Save)
            .expect.element(selectors.globals.errorCard).text.to.contain('The name field must be between 1 and 30 characters long.')
        browser
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
        browser.expect.element(selectors.feilds.nameF).value.to.not.equal(data.badData.breakingName.name)


    },
    'Numbers Only': browser => {
        browser
            .click(selectors.employees.bO)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.badData.numberOnly.phone)
            .click(selectors.buttons.Save)
            .expect.element(selectors.globals.errorCard).text.to.contain('The phone number must be 10 digits long.')
        browser
            .click(selectors.employees.dB)
            .click(selectors.employees.bO)
            .click(selectors.feilds.phoneF)
            .expect.element(selectors.feilds.phoneF).text.to.not.equal(data.badData.numberOnly.phone)

    },
    'Check ID': browser => {
        browser
            .click(selectors.employees.bO)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.bO)
        browser
            .click(selectors.employees.dB)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.dB)
        browser
            .click(selectors.employees.eS)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.eS)
        browser
            .click(selectors.employees.hW)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.hW)
        browser
            .click(selectors.employees.lB)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.lB)
        browser
            .click(selectors.employees.lW)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.lW)
        browser
            .click(selectors.employees.mB)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.mB)
        browser
            .click(selectors.employees.pW)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.pW)
        browser
            .click(selectors.employees.rE)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.rE)
        browser
            .click(selectors.employees.tO)
            .expect.element(selectors.globals.ID).text.to.contain(data.CheckID.tO)
        browser
    },

    'Add New Employees': browser => {
        browser

            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE11, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE12, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE13, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE14, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE15, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE16, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE17, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE18, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE19, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE20, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE21, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE22, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE23, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE24, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE25, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE26, 100)
            .click(selectors.buttons.Add)
            .waitForElementVisible(selectors.employees.nE27, 100)

    },
    'Add New Employee': browser => {
        browser
            .click(selectors.buttons.Add)
            .click(selectors.employees.nE11)
            .click(selectors.feilds.nameF)
            .clearValue(selectors.feilds.nameF)
            .setValue(selectors.feilds.nameF, data.goodData.AddNewEmployee.name)
            .click(selectors.feilds.phoneF)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.goodData.AddNewEmployee.phone)
            .click(selectors.feilds.titleF)
            .clearValue(selectors.feilds.titleF)
            .setValue(selectors.feilds.titleF, data.goodData.AddNewEmployee.title)
            .click(selectors.buttons.Save)

        browser.expect.element(selectors.feilds.nameF).value.to.equal(data.goodData.AddNewEmployee.name)
        browser.expect.element(selectors.feilds.phoneF).value.to.equal(data.goodData.AddNewEmployee.phone)
        browser.expect.element(selectors.feilds.titleF).value.to.equal(data.goodData.AddNewEmployee.title)

    }, 'Red Bar NE': browser => {
        browser
            .click(selectors.buttons.Add)
            .click(selectors.employees.nE11)
            .click(selectors.feilds.nameF)
            .clearValue(selectors.feilds.nameF)
            .setValue(selectors.feilds.nameF, data.badData.redBar.name)
            .click(selectors.feilds.phoneF)
            .clearValue(selectors.feilds.phoneF)
            .setValue(selectors.feilds.phoneF, data.badData.redBar.phone)
            .click(selectors.feilds.titleF)
            .clearValue(selectors.feilds.titleF)
            .click(selectors.buttons.Save)
            .pause(3000)

            browser.expect.element(selectors.employees.nE11).value.to.not.equal(data.badData.redBar.name)
            browser.expect.element(selectors.employees.nE11).value.to.not.equal(data.badData.redBar.phone)






    },





}
