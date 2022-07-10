/* eslint-disable no-undef */

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("clicks on Sign in and navigates to the sign in page", () => {
    cy.get(".navbar").contains("Sign in").click();
    cy.location("pathname").should("include", "login");
  });

  it("clicks on Sign up and navigates to the sign up page", () => {
    cy.get(".navbar").contains("Sign up").click();
    cy.location("pathname").should("include", "register");
  });

  it("clicks on Policies and navigates to the policy page", () => {
    cy.get(".navbar").contains("Policies").click();
    cy.location("pathname").should("include", "policies");
  });
});
