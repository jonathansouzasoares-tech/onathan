document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Menu Responsivo (Mobile Toggle)
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        // Alterna a exibição do menu mudando o estilo inline de forma simples
        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "70px";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.backgroundColor = "#ffffff";
            navLinks.style.padding = "20px";
            navLinks.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
        }
    });

    // 2. Validação e Envio do Formulário de Contato
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que a página recarregue

        // Captura os valores digitados
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação básica simples
        if (nome === "" || email === "" || mensagem === "") {
            feedback.style.color = "red";
            feedback.textContent = "Por favor, preencha todos os campos.";
            return;
        }

        // Simulação de envio bem-sucedido
        feedback.style.color = "green";
        feedback.textContent = `Obrigado pelo interesse, ${nome}! Nossa equipe do Turismo do Paraná entrará em contato em breve.`;

        // Limpa o formulário após o envio
        form.reset();
    });
});
