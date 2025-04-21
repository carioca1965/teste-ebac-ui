/// <reference types="cypress" />

describe('funcionalidade: Login', () => {

    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduardoteste@teste.com.br')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, eduardoteste (não é eduardoteste? Sair' )

    
    })
})


