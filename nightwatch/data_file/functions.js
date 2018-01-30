module.exports = {
    entervalue: (browser, selectors, data) => {
        browser 
        .clearValue(selectors)
        .setValue(selectors, data)
        .verify.value(selectors, data)
    },

}