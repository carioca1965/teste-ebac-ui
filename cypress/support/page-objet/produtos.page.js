class ProdutosPage {

    visitarurl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
         cy.get('[name="s"]').eq(1).type(nomeProduto)
         cy.get('.button-search ').eq(1).click()
    }

    buscarProdutolista(nomeProduto) {
        cy.get('.products >.row')
        .contains(nomeProduto)
        .click()
    
    
    }

    visitarProduto(nomeProduto) {
     //  cy.visit(`produtos/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    adicionarProdutoCarrinho(tamanho, Cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + Cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }  



}

export default new ProdutosPage()
// export default new ProdutosPage()