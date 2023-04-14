const allureReporter = require('@wdio/allure-reporter').default

const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    afterEach(() => {
        console.log('afterEach called')
    })

    it('should login with valid credentials', async () => {
        allureReporter.addSeverity('critical')
        allureReporter.addTestId('TST-0001')
        allureReporter.addTestId('TST-0002')
        allureReporter.addIssue('ISS-0001')
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})
