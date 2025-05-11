/// <reference types="cypress" />
    import produtosPage from "../../support/page-objet/produtos.page";

    
 describe('Funcionalidades: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarurl()
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products >.row')
        .contains('Aero Daily Fitness Tee')
        .click()
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
        cy.get('.product_title').should('have.text', 'Aero Daily Fitness Tee')
    
        
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Vulcan Weightlifting Tank')
        cy.get('.product_title').should('contain', 'Vulcan Weightlifting Tank')
    });


    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Cassius-Sparring-Tank')
        cy.get('.product_title').should('contain', 'Cassius Sparring Tank')
        cy.get('.product_title').should('have.text', 'Cassius Sparring Tank')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let quantidade = 7
        produtosPage.buscarProduto('Aether Gym Pants')
        produtosPage.adicionarProdutoCarrinho( '32', 'Blue', quantidade)
    });

    it('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
         cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.adicionarProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        
        })
        

     });
       



    
});