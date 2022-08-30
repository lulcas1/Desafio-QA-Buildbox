describe('Realizar o cadastro de informacoes', () => {

    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/');
    })

    it('Teste para preencher o cadastro', () => {
        
        cy.contains('a', 'Cadastre-se para fazer entregas').click();
        
        //preenchendo formulário
        cy.get("input[placeholder=\"Nome completo\"]").type("Lucas Vasconcelos");
        cy.get("input[placeholder=\"CPF somente números\"]").type("44735899006");
        cy.get("input[placeholder=\"E-mail\"]").type("email.teste@gmail.com");
        cy.get("input[placeholder=\"Whatsapp\"]").type("01182111030");
        cy.get("input[placeholder=\"CEP\"]").type("01310200");
        
        cy.get("input[type=button]").click();
        //cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
        
        cy.get("input[placeholder=\"Número\"]").type("195");
        cy.get("input[placeholder=\"Complemento\"]").type("Casa");
        cy.get('img[alt="Van/Carro"]').click()

        //upload de imagem
        cy.get("input[type=file]").attachFile("driver-license.png")

        cy.contains('button', 'Cadastre-se para fazer entregas').click();

        cy.contains('button', 'Fechar').should('be.visible')


    })
}) 