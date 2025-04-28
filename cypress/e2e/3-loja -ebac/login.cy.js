/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('eduardoteste@teste.com.br')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, eduardoteste (não é eduardoteste? Sair' )
    })

    it('Deve emetir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('Giovanateste@teste.com.br')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        
    });

    it('Deve emetir uma mensagem de erro ao inserir senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('eduardoteste@teste.com.br')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail')
        cy.get('.woocommerce-error').should('exist') 
    
    });

    it('Deve fazer logim com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, eduardoteste (não é eduardoteste? Sair' )
        
    });

    it('Deve fazer logim com sucesso usando fixture', () => {
     cy.fixture('perfil').then((dado) => {
        cy.get('#username').type(dado.usuario , {log: false})
        cy.get('#password').type(dado.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, eduardoteste (não é eduardoteste? Sair' )
      })


        
    });
    

    it.only('Deve fazer logim com sucesso usando  comandos otimizados', () => {
        
            cy.login('eduardoteste@teste.com.br', '1234')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, eduardoteste (não é eduardoteste? Sair' )

    
    
    
        })
        

})


