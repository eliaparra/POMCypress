/// <reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'

const allure = Cypress.Allure.reporter.getInterface();

describe('Login as Bank Manager', () => {

    const homePage = new HomePageActions()
    beforeEach(() => {
        homePage.navigateToURL()
    })

    it("Verify title of the page", () => {
        allure.feature("Validating the title of the page");
        allure.description("This is a validate title description");
        allure.epic('this is a EPIC');
        homePage.validateTitle().should('eq','Protractor practice website - Banking App')

        
    })



    it("Verify login as a Bank Manager", () => {
        cy.allure()
        .feature('This is feature')
        .epic('This is epic')
        .issue('google', 'https://google.com')
        .parameter('name', 'value')
        .tag('this is nice tag', 'as well as this');
        homePage.loginAsBankManager()

    })
})