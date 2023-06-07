/// <reference types="cypress"/>
describe("Locators",()=>{
    beforeEach(()=>{
        cy.visit("/elements")})
    it("should display locators",()=>{
        cy.get("button")
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("#btn-with-id")
        cy.get("[type='submit']")
        //cy.get(".btn-with-class")
        cy.getByTestId("btn-id-1")
})
    it("locating items with contain",()=>{
        cy.contains("Unique Text")
        cy.contains("Not Unique Text")
        cy.contains("[type='submit']","Not Unique Text")
        cy.contains("form","Not Unique Text")
    })
    it("Locating items with find",()=>{

        cy.get("#form-1").find(".btn-1")
    })
    })