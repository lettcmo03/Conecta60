/* Funcionalidades ainda em desenvolvimento */

const botoesEmBreve = document.querySelectorAll(".btn-em-breve");

botoesEmBreve.forEach(function(botao) {
    botao.addEventListener("click", function() {
        alert("Esta funcionalidade estará disponível em breve!");
    });
});


/* Formulário de interesse - protótipo */

const formulario = document.getElementById("formInteresse");
const mensagemForm = document.getElementById("mensagemForm");

if (formulario && mensagemForm) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        mensagemForm.textContent =
            "Esta funcionalidade ainda está em desenvolvimento. " +
            "Nenhum dado foi enviado ou armazenado.";

        mensagemForm.style.color = "#075f72";

    });

}

/* Menu responsivo */

const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");

if (menuToggle && menuLinks) {

    menuToggle.addEventListener("click", function() {

        menuLinks.classList.toggle("ativo");

        const menuAberto = menuLinks.classList.contains("ativo");

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );

    });


    /* Fecha o menu depois que a pessoa escolhe uma opção */

    const linksMenu = menuLinks.querySelectorAll("a");

    linksMenu.forEach(function(link) {

        link.addEventListener("click", function() {

            menuLinks.classList.remove("ativo");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}