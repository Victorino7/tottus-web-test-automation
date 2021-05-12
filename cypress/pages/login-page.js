import LOGIN from '../locators/login'
import UTILS from '../utils/utils'

class LoginPage {

    static typeUserName(username) {
        cy.get(LOGIN.USERNAME_INPUT_TEXT)
            .type(username, { delay: 100 })
    }

    static typePassword(password) {
        cy.get(LOGIN.PASSWORD_INPUT_TEXT)
            .type(password, { delay: 100 })
    }

    static clickSignIn() {
        cy.get(LOGIN.SIGNIN_BUTTON)
            .click()
    }

    static verifyMessageErrorLogin() {
        cy.get(LOGIN.MESSAGE_ERROR_LABEL)
            .should('have.text', UTILS.MSSG_ERROR_LOGIN)
    }

}

export default LoginPage