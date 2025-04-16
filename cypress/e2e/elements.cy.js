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

  it("TexfFields", () => {
    cy.get("#formNome").type("teste");
    cy.get("#formNome").should("have.value", "teste");

    cy.get("#elementosForm\\:sugestoes")
      .type("text area")
      .should("have.value", "text area");

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6)"
    ).type("teste");
    //   .should("have.value", "teste");

    cy.get('[data-cy="dataSobrenome"]').type(
      "teste12345{backspace}{backspace}"
    );

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("erro{selectall}acerto")
      .should("have.value", "acerto");
  });

  it("radioButtom", () => {
    cy.get("#formSexoFem").click();
    cy.get("#formSexoFem").should("be.checked");
    cy.get("#formSexoMasc").should("be.not.checked");
  });

  it('Checkbox', ()=>{
    cy.get('#formComidaPizza').click()
    .should('be.checked')

    cy.get('[name=formComidaFavorita]').click({multiple:true})
  })


  it('combo', ()=>{
    cy.get('[data-test="dataEscolaridade"]').select('1grauincomp')
    cy.get('[data-test="dataEscolaridade"]').should('have.value', '1grauincomp')
    

  })

  it.only('Combo multiplo', ()=>{
    cy.get('[data-testid="dataEsportes"]').select(['natacao', 'Corrida'])

  })
});
