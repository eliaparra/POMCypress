/// <reference types="cypress" />
import HomePageActions from '../../pageObjects/pageActions/HomePageActions'
import AddCustomerPageActions from '../../pageObjects/pageActions/AddCustomerPageActions'
import OpenAccountPageActions from '../../pageObjects/pageActions/OpenAccountPageActions'

describe('Open account customer', () => {

    const homePage = new HomePageActions()
    const addCustomer = new AddCustomerPageActions()
    const openAccount = new OpenAccountPageActions()

    before(() => {
        cy.fixture('testdata').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        homePage.navigateToURL()
    })

    it("Open Account test", ()=> {

        homePage.loginAsBankManager()
        addCustomer.addCustomerDetails(data.firstName,data.lastName,data.postCode)
        addCustomer.validateAlert(data.alertMsg)
        openAccount.openAccount(data.customer,data.currency)
        openAccount.validateAlerta(data.alertAccount)
        //openAccount.validateAlert(data.alertAccount)


    })




})

