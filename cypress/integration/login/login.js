/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/login-page'
import HomePage from '../../pages/home-page'

Given(`que el usuario se encuentra en la pagina de Tottus`, () => {
    cy.visit('http://svr94004:8079/Login.aspx')
})

When(`ingresa {string} y {string} para loguearse`, (username, password) => {
    LoginPage.typeUserName(username)
    LoginPage.typePassword(password)
    LoginPage.clickSignIn()
})

Then(`verifica que el {string} es el correcto`, (nickname) => {
    HomePage.verifyNickName(nickname)
})

Then(`verifica que el mensaje de error`, () => {
    LoginPage.verifyMessageErrorLogin()
})