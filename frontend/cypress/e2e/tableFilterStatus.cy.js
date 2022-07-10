/* eslint-disable no-undef */

context("policies table filter by status", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/policies");
  });

  it("can filter by status ACTIVE", () => {
    cy.get('select[id="status"]').select("ACTIVE");
    cy.get(".status").first().should("have.text", "ACTIVE");
  });

  it("can filter by status PENDING", () => {
    cy.get('select[id="status"]').select("PENDING");
    cy.get(".status").first().should("have.text", "PENDING");
  });

  it("can remove status filter", () => {
    cy.get('select[id="status"]').select("ALL STATUS");
    cy.get(".status").contains("ACTIVE").first().should("exist");
    cy.get(".status").contains("PENDING").first().should("exist");
  });
});
