// <reference types="cypress" />

import OpenAccountPageElements from "../pageElements/OpenAccountPageElements"

export default class OpenAccountPageActions{

    constructor (){
        globalThis.openAccountElement = new OpenAccountPageElements()
    }


    openAccount(customer,currency){
        openAccountElement.openAccountBtn().click()
        openAccountElement.customerDropdown().select(customer)
        openAccountElement.currencyDropdown().select(currency)
        openAccountElement.processBtn().click()
    }

    validateAlerta(alertAccount){
        cy.on('window:alert',(alertTex) => {
            expect(alertTex).contains(alertAccount)
        })

    }
}