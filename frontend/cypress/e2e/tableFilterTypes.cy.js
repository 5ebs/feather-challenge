/* eslint-disable no-undef */

context("policies table filter by type", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/policies");
  });

  it("can filter by type HEALTH", () => {
    cy.get('select[id="type"]').select("HEALTH");
    cy.get(".type").first().should("have.text", "HEALTH");
  });

  it("can filter by type LIABILITY", () => {
    cy.get('select[id="type"]').select("LIABILITY");
    cy.get(".type").first().should("have.text", "LIABILITY");
  });

  it("can filter by type HOUSEHOLD", () => {
    cy.get('select[id="type"]').select("HOUSEHOLD");
    cy.get(".type").first().should("have.text", "HOUSEHOLD");
  });

  it("can remove type filter", () => {
    cy.get('select[id="type"]').select("ALL TYPES");
    cy.get(".type").contains("HEALTH").first().should("exist");
    cy.get(".type").contains("HOUSEHOLD").first().should("exist");
  });
});
