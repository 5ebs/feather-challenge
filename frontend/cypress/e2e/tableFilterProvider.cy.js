/* eslint-disable no-undef */

context("policies table filter by provider", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/policies");
  });

  it("can filter by provider BARMER", () => {
    cy.get('select[id="provider"]').select("BARMER");
    cy.get(".provider").first().should("have.text", "BARMER");
  });

  it("can filter by provider AOK", () => {
    cy.get('select[id="provider"]').select("AOK");
    cy.get(".provider").first().should("have.text", "AOK");
  });

  it("can filter by provider TK", () => {
    cy.get('select[id="provider"]').select("TK");
    cy.get(".provider").first().should("have.text", "TK");
  });

  it("can filter by provider DAK", () => {
    cy.get('select[id="provider"]').select("DAK");
    cy.get(".provider").first().should("have.text", "DAK");
  });

  it("can remove provider filter", () => {
    cy.get('select[id="provider"]').select("ALL PROVIDERS");
    cy.get(".provider").contains("AOK").first().should("exist");
    cy.get(".provider").contains("BARMER").first().should("exist");
  });
});
