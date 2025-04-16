/// <reference types="cypress" />

describe('Helpers',()=>{
    it('Wrap', () =>{

        const obj = {nome:'User', idade:20}
        cy.visit("https://wcaquino.me/cypress/componentes.html");

        expect(obj).to.have.property('nome')
        expect(obj).to.have.property('idade').eq(20)
        cy.wrap(obj).should('have.property',('nome'))

        // cy.get('#formNome').type('teste')
         cy.get('#formNome').then($el =>{
            cy.wrap($el).type('teste via wrap')
         })
    }) 

    it.only('its', ()=>{
        const obj = {nome:'User', idade:20}
        cy.wrap(obj).should('have.a.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User')
        
        const obj2 ={nome:'User', idade:20 , endereco:{rua:'teste', numero:150}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('be.equal', 'teste')
        cy.wrap(obj2).its('endereco.rua').should('be.equal', 'teste')

    })
})