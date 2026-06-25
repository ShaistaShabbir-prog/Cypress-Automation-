describe("Visual Regression — Homepage", () => {
  it("homepage matches snapshot", () => {
    cy.visit("/");
    cy.wait(1000); // let animations settle
    cy.compareSnapshot("homepage", 0.1);
  });

  it("navigation matches snapshot", () => {
    cy.visit("/");
    cy.get("nav").compareSnapshot("navigation", 0.05);
  });
});
