/// <reference types="cypress" />
import HomePageElements from "../pageElements/HomePageElements"

export default class HomePageActions{

    constructor (){
        globalThis.homePageElement = new HomePageElements()
    }


    navigateToURL(){
        cy.visit('/')
    }

    validateTitle(){
        return cy.title()
    }

    loginAsBankManager(){
        homePageElement.bankManagerLoginBtn().click()
    }
    loginAsCustomer(){
        homePageElement.customerLoginBtn().click()
    }



}