// <reference types="cypress" />
import AddCustomerPageElements from "../pageElements/AddCustomerPageElements"

export default class AddCustomerPageActions{

    constructor (){
        globalThis.addCustomerElement = new AddCustomerPageElements()
    }


    addCustomerDetails(firstName,lastName,postCode){
        addCustomerElement.addCustomerBtn().click()
        addCustomerElement.firstNameField().type(firstName)
        addCustomerElement.lastNameField().type(lastName)
        addCustomerElement.postCodeField().type(postCode)
        addCustomerElement.addCustomerSubmitBtn().click()
    }

    validateAlert(alertTexto){
        cy.on('window:alert',(alertText) => {
            expect(alertText).contains(alertTexto)
        })
    }
}