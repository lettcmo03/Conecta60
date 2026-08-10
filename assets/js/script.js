/* formulario dito cujo */
const formulario = document.getElementById("formInteresse");
const mensagemForm = document.getElementById("mensagemForm");
const btnVerCadastros = document.getElementById("btnVerCadastros");
const btnBaixarCadastros = document.getElementById("btnBaixarCadastros");
const btnLimparCadastros = document.getElementById("btnLimparCadastros");
const listaCadastros = document.getElementById("listaCadastros");

/* busca */
function buscarCadastros() {
    return JSON.parse(localStorage.getItem("cadastrosConecta60")) || [];
}

/* salva */
function salvarCadastros(cadastros) {
    localStorage.setItem("cadastrosConecta60", JSON.stringify(cadastros));
}

/* envia */
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const modalidade = document.getElementById("modalidade").value;
    const mensagem = document.getElementById("mensagem").value.trim();
    if (nome.length < 3) {
        mensagemForm.textContent = "Por favor, informe um nome válido.";
        mensagemForm.style.color = "red";
        return;
    }
    if (telefone.length < 10) {
        mensagemForm.textContent = "Por favor, informe um WhatsApp válido.";
        mensagemForm.style.color = "red";
        return;
    }
    const novoCadastro = {
        id: Date.now(),
        nome: nome,
        telefone: telefone,
        email: email,
        modalidade: modalidade,
        mensagem: mensagem,
        data: new Date().toLocaleString("pt-BR")
    };
    const cadastros = buscarCadastros();
    cadastros.push(novoCadastro);
    salvarCadastros(cadastros);
    mensagemForm.textContent = "Cadastro enviado com sucesso!";
    mensagemForm.style.color = "#075f72";
    formulario.reset();
});

/* mostra cadastro */
btnVerCadastros.addEventListener("click", function() {
    const cadastros = buscarCadastros();
    listaCadastros.innerHTML = "";
    if (cadastros.length === 0) {
        listaCadastros.innerHTML = "<p>Nenhum cadastro registrado ainda.</p>";
    } else {
        cadastros.forEach(function(cadastro) {
            listaCadastros.innerHTML += `
                <div class="cadastro-item">
                    <p><strong>Nome:</strong> ${cadastro.nome}</p>
                    <p><strong>WhatsApp:</strong> ${cadastro.telefone}</p>
                    <p><strong>E-mail:</strong> ${cadastro.email || "Não informado"}</p>
                    <p><strong>Modalidade:</strong> ${cadastro.modalidade}</p>
                    <p><strong>Mensagem:</strong> ${cadastro.mensagem || "Sem mensagem"}</p>
                    <p><strong>Data:</strong> ${cadastro.data}</p>
                </div>
            `;
        });
    }

    if (listaCadastros.style.display === "block") {
        listaCadastros.style.display = "none";
    } else {
        listaCadastros.style.display = "block";
    }
});

/* baixa os bagulhos */
btnBaixarCadastros.addEventListener("click", function() {
    const cadastros = buscarCadastros();
    if (cadastros.length === 0) {
        alert("Não existem cadastros para baixar.");
        return;
    }
    let conteudo = "Nome;Telefone;Email;Modalidade;Mensagem;Data\n";
    cadastros.forEach(function(cadastro) {
        conteudo += `${cadastro.nome};${cadastro.telefone};${cadastro.email};${cadastro.modalidade};${cadastro.mensagem};${cadastro.data}\n`;
    });
    const arquivo = new Blob([conteudo], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(arquivo);
    link.download = "cadastros_conecta60.csv";
    link.click();
});

/* limpa cache */
btnLimparCadastros.addEventListener("click", function() {
    const confirmar = confirm("Tem certeza que deseja apagar todos os cadastros?");
    if (confirmar) {
        localStorage.removeItem("cadastrosConecta60");
        listaCadastros.innerHTML = "";
        listaCadastros.style.display = "none";
        alert("Cadastros apagados com sucesso.");
    }
});