/// <reference types="cypress" />

describe('Deve visitar uma pagina e validar o titulo', ()=>{


    it('visitar pagina e validar o titulo',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo de Treinamento')

        // Variavel
        // cy.title().should('be.equal', 'Campo de Treinamento')
        // .should('contain', 'Campo de Treinamento')
    })
})