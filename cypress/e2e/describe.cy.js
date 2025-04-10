/// <reference types="cypress" />

it('Teste externo', () =>{

})

describe('Deve ser um grupo de testes', ()=>{

  it('dentro do grupo de testes', ()=>{

  })
})


describe('Deve ser um novo grupo de testes', ()=>{
  

  it.skip('dentro do novo grupo de testes', ()=>{
    
  })
})

describe('grupo pai',()=>{
  describe('grupo filho',()=>{
    it('teste dentro do grupo filho',()=>{

    })
  })
})