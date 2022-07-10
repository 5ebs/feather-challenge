/* eslint-disable no-undef */

context("policies table research by name and surname", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/policies");
  });

  it("can search by name Amanda", () => {
    cy.get('input[id="search"]').type("Amanda");
    cy.wait(1000);
    cy.get(".name").first().contains("Amanda").should("exist");
  });

  it("can search by surname Erasmus", () => {
    cy.get('input[id="search"]').type("Erasmus");
    cy.wait(1000);
    cy.get(".name").first().contains("Erasmus").should("exist");
  });
});
