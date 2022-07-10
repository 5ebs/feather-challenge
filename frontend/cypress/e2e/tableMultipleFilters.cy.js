/* eslint-disable no-undef */

context("policies table filter by provider, type and status", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/policies");
  });

  it("can filter by provider BARMER, type HEALTH, and status ACTIVE", () => {
    cy.get('select[id="provider"]').select("BARMER");
    cy.get('select[id="type"]').select("HEALTH");
    cy.get('select[id="status"]').select("ACTIVE");

    cy.get(".provider").first().should("have.text", "BARMER");
    cy.get(".type").first().should("have.text", "HEALTH");
    cy.get(".status").contains("ACTIVE").first().should("have.text", "ACTIVE");

    cy.get('p[id="reset"]').click();
    cy.get(".status").first().should("have.text", "PENDING");
  });
});
