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

  it.only("TexfFields", () => {
    cy.get("#formNome").type("teste");
    cy.get("#formNome").should("have.value", "teste");

    cy.get("#elementosForm\\:sugestoes")
      .type("text area")
      .should("have.value", "text area");

    cy.get("#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6)")
      .type("teste")
    //   .should("have.value", "teste");

    cy.get('[data-cy="dataSobrenome"]').type('teste12345{backspace}{backspace}')


    cy.get("#elementosForm\\:sugestoes")
    .clear()
    .type('erro{selectall}acerto')
    .should('have.value','acerto')
  });
});
