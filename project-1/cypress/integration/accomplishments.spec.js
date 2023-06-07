/// <reference types="cypress"/>
describe("Accomplishmentsdashboard",()=>{
    beforeEach(()=>{
        cy.visit("/accomplishments")
    })

    it("shouldDisplayTitle",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("Testing AccomplishmentsDashboard")
        cy.get("[data-cy='accomplishment-input']").type("I want to test the given textarea.")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")  
        //cy.get("[data-cy='accomplishment-checkbox']").click()
      })
      it("shouldDisplayTitle",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("Testing AccomplishmentsDashboard")
        cy.get("[data-cy='accomplishment-input']").type("I want to test the given textarea.")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
      })
      it("shouldResetValues",()=>
      {
        cy.get("[data-cy='accomplishment-title-input']").type("Testing AccomplishmentsDashboard")
        cy.get("[data-cy='accomplishment-input']").type("I want to test the given textarea.")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        cy.contains("Go Back").click()
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value","")
      })
        
        
    
})