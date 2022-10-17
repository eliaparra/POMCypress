/// <reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'
import AddCustomerPageActions from '../../pageObjects/pageActions/AddCustomerPageActions'

describe('Adding a new customer', () => {

    const homePage = new HomePageActions()
    const addCustomer = new AddCustomerPageActions()

    

    before(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        homePage.navigateToURL()
    })

    it("Add customer details", ()=> {

        homePage.loginAsBankManager()
        addCustomer.addCustomerDetails(data.firstName,data.lastName,data.postCode)
        addCustomer.validateAlert(data.alertMsg)
    })




})

