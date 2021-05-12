import HOME from '../locators/home'

class HomePage {

    static verifyNickName(user) {
        cy.get(HOME.NICKNAME_LABEL)
            .should('have.text', user)
    }

}

export default HomePage