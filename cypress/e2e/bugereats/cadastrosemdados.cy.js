describe ('Realizar cadastro sem preencher o formulario', () =>{

    beforeEach(() =>{
        cy.visit('https://buger-eats.vercel.app/');
    })

    it('verifica mensagem validacao', () =>{
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        cy.contains('button', 'Cadastre-se para fazer entregas').click();
        cy.contains('span', 'É necessário informar o nome').should('be.visible');
       
    })
}) 