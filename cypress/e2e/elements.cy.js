/// <reference types="cypress" />

describe("Elementos", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  it("Textos", () => {
    cy.get("span").should("contain", "Cuidado");
  });

  it("Links", () => {
    cy.get('[href="#"]').should("have.text", "Voltar");
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    //utilizando contains
    cy.reload();
    cy.get("#resultado").should("not.have.text", "Voltou!");
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });
});
