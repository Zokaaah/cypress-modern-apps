/// <reference types="cypress" />

describe('Esperas', ()=>{
  beforeEach('Acessar aplicação',()=>{
    cy.visit("https://wcaquino.me/cypress/componentes.html")
  })


  it('Aguardar elemento estar disponivel', ()=>{
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('teste')
  })

  it('Uso do find', ()=>{
    cy.get('#buttonList').click()

    cy.get('#lista > :nth-child(1) > span').should('contain', 'Item 1')
    cy.get('#lista > :nth-child(2) > span').should('contain', 'Item 2')
  })

  it('uso do timeout', ()=>{
    // cy.get('#buttonDelay').click()
    // cy.get('#novoCampo').should('exist')
    cy.get('#buttonList').click()
    cy.wait(5000)
    cy.get('#lista > :nth-child(2) > span').should('contain', 'Item 2')

  })

  it.only('should x then', ()=>{
    
  })

})



