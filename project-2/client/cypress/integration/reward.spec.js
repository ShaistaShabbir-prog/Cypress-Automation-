/// <reference types="cypress"/>
describe("RewardDashboard",()=>{
   beforeEach(()=>{
        cy.visit("/rewards")

    })
    it("ShouldDisplayAListOfRewards",()=>{
        cy.get("ul").should("contain","500 points for drinking 8 cups of water for 7 straight days")
        .and("contain","850 points for fasting for 5 days straight")
    })


})