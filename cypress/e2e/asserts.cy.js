/// <reference types="cypress" />

it('Igualdade', () =>{
    const a = 1

    expect(a).equal(1)
    expect(a, 'deveria ser 1').equal(1)
    expect(a).to.be.equal(1)

    //negativa
    expect(a).not.equal('c')
})


it('Veracidade', ()=>{
    const a = true;
    const b = null
    let c;

    expect(a).to.be.true
    expect(b).to.be.null
    expect(a).not.to.be.null
    expect(c).to.be.undefined
})

it('Equalidade de objetos',()=>{
    const obj = {
        a:1,
        b:2,
        c:3
    }
    const obj2={
        date:10
    }

    expect(obj).to.be.not.null
    expect(obj, 'deve ser igual').to.be.deep.eq({a:1, b:2, c:3})
    expect(obj).include({a:1})
    expect(obj, 'deve conter o B').to.have.property('b')
    expect(obj2, 'obj não pode ser vazio').not.be.empty




})
