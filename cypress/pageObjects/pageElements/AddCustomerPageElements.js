/// <reference types="cypress" />

const or = require("../../locators.json")

export default class AddCustomerPageElements{


    addCustomerBtn(){
        return cy.get(or.addCustomerPage.addCustBtn)
    }

    firstNameField(){
        return cy.get(or.addCustomerPage.firstName)
    }

    lastNameField(){
        return cy.get(or.addCustomerPage.lastName)
    }

    postCodeField(){
        return cy.get(or.addCustomerPage.postCode)
    }
    addCustomerSubmitBtn(){
        return cy.get(or.addCustomerPage.addCustomerSubmit)
    }
}