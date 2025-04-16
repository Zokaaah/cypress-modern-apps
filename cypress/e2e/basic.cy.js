/// <reference types="cypress" />

describe('Basics', ()=>{


    it.only('visitar pagina e validar o titulo',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo de Treinamento')

        cy.title().then(title=>{
            console.log(title)
        })
    })

    it('Localizar elemento e interagir', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()
        .should('have.value', 'Obrigado!')
    })
})