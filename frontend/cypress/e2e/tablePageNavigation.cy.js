/* eslint-disable no-undef */

context("navigation between pages", () => {
  it("clicks on next and go to the following page", () => {
    cy.visit("http://localhost:3000/policies");
    cy.get(".next").click();
    cy.url().should("include", "/policies?p=2");
  });
  it("clicks on prev and go to the previous page", () => {
    cy.get(".prev").click();
    cy.url().should("include", "/policies?p=1");
  });
});
