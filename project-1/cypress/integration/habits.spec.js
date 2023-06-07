/// <reference types="cypress"/>
describe("Habitdashboard",()=>{
    beforeEach(() => {
        cy.visit("/habits")

    })
    it("should display habits",()=>{
        cy.contains("button","Add").click()
        cy.contains("Add a new habit").should("be.visible")//assertion whether true or false
    })
    it("should add habits",()=>{
        cy.get("#habit-add-btn").click()
        cy.get("input[placeholder='Habit']").type("Hike")
        cy.contains("button","Save Changes").click()
        cy.contains("Hike").should("be.visible")
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Hike").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")

    })
    
})
