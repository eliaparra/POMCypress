/// <reference types="cypress" />

const or = require("../../locators.json")

export default class OpenAccountPageElements{


    openAccountBtn(){
        return cy.get(or.openAccountPage.openAccountBtn)
    }

    processBtn(){
        return cy.get(or.openAccountPage.processBtn)
    }

    customerDropdown(){
        return cy.get(or.openAccountPage.customer)
    }

    currencyDropdown(){
        return cy.get(or.openAccountPage.currency)
    }










}