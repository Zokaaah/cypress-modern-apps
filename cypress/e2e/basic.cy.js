/// <reference types="cypress" />

describe('Basics', ()=>{


    it.only('visitar pagina e validar o titulo',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.pause()
        cy.title().should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo de Treinamento')

        // Variavel
        // cy.title().should('be.equal', 'Campo de Treinamento')
        // .should('contain', 'Campo de Treinamento')
    })

    it('Localizar elemento e interagir', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()
        .should('have.value', 'Obrigado!')
    })
})