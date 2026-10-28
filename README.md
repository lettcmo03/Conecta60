# Conecta 60+

O **Conecta 60+** é um projeto acadêmico de inclusão e alfabetização digital voltado principalmente para pessoas com 60 anos ou mais, desenvolvido na disciplina de **Práticas Extensionistas Integradoras III**, do curso de Engenharia de Software da Universidade de Vassouras — Campus Saquarema.

A proposta é auxiliar pessoas idosas no uso de tecnologias do cotidiano de forma **simples, segura e autônoma**, combinando atividades presenciais e um software educativo.

> **Status:** protótipo acadêmico em desenvolvimento — 2026.2.

---

## Objetivo

Promover a inclusão digital e ampliar a autonomia de pessoas idosas no uso de smartphones, aplicativos e serviços digitais, respeitando o ritmo de aprendizagem de cada participante.

---

## Público-alvo

**Público geral:** pessoas com 60 anos ou mais que apresentem dificuldades no uso de tecnologias digitais.

**Território:** Saquarema — RJ.

Na ação extensionista atual, o projeto trabalhará com senhoras participantes do **Grupo Roda**, liderado por **Alba Alcione**.

Datas, locais e demais informações operacionais são mantidos no **Plano de Ação vigente**, disponível na documentação do projeto.

---

## Conteúdos

Entre os temas planejados estão:

* noções básicas de smartphone;
* contatos e WhatsApp;
* chamadas, fotos e compartilhamento de arquivos;
* navegação na internet;
* e-mail;
* serviços públicos digitais, como GOV.br;
* segurança digital e prevenção de golpes;
* aplicativos bancários e transações digitais;
* Inteligência Artificial e ferramentas como o ChatGPT.

Os conteúdos poderão ser adaptados conforme as necessidades dos participantes.

---

## MVP do protótipo

Atualmente, o MVP é composto por:

1. **página inicial responsiva** apresentando o projeto;
2. **quiz de tecnologia** com 15 situações do cotidiano;
3. **resumo das respostas** com integração de envio por e-mail;
4. **fluxo demonstrativo de interesse**, sem envio de dados.

Nesta etapa, o sistema ainda não possui autenticação, área individual do aluno ou banco de dados.

---

## Metodologia

As atividades utilizam:

* linguagem simples e objetiva;
* demonstrações passo a passo;
* exemplos do cotidiano;
* atividades práticas;
* utilização do próprio dispositivo;
* acompanhamento individual quando necessário;
* repetição dos procedimentos;
* incentivo à autonomia.

A proposta é ensinar não apenas **onde clicar**, mas ajudar o participante a compreender o que está fazendo e utilizar a tecnologia com maior segurança.

---

## Documentação

A documentação acadêmica, pedagógica e operacional está organizada na pasta `docs/`.

```text
docs/
├── formularios/
├── historico/
├── materiais-de-aula/
├── modelos/
├── planejamento/
├── planos-de-aula/
└── relatorios/
```

O **Plano de Ação vigente** deve ser considerado a principal referência para informações sobre:

* comunidade atendida;
* locais e datas;
* objetivos;
* metodologia;
* indicadores;
* evidências;
* responsabilidades da equipe.

Versões anteriores poderão permanecer em `docs/historico/`.

> **Privacidade:** como este repositório é público, documentos preenchidos contendo nomes, assinaturas, telefones, e-mails, imagens sem autorização ou outras informações pessoais dos participantes não devem ser publicados. O repositório deve armazenar apenas modelos e materiais adequados para divulgação pública.

---

## Indicadores da ação

A ação extensionista atual pretende:

* atender, no mínimo, **20 participantes**;
* registrar a presença das participantes;
* alcançar pelo menos **75% de realização das tarefas propostas**;
* coletar pelo menos **5 depoimentos**, mediante consentimento;
* registrar evidências das atividades realizadas.

---

## Status do projeto

### Em desenvolvimento

* organização da documentação;
* produção dos materiais das aulas;
* ampliação dos módulos do protótipo;
* preparação dos modelos de presença, consentimento e certificado;
* preparação das oficinas presenciais.

### Próximas etapas

* primeira aula presencial em **04/10/2026**;
* segunda aula presencial em **11/10/2026**;
* coleta de evidências;
* análise dos resultados;
* atualização da documentação;
* continuidade do desenvolvimento do software educativo.

*As datas previstas poderão ser alteradas mediante solicitação da patrocinadora do evento.*

---

## Como executar o protótipo

O projeto utiliza **HTML, CSS e JavaScript**, sem necessidade de instalação de dependências.

Clone o repositório:

```bash
git clone https://github.com/lettcmo03/Conecta60.git
```

Acesse a pasta:

```bash
cd Conecta60
```

Depois, abra o arquivo:

```text
index.html
```

### Versão pública

O protótipo está disponível pelo GitHub Pages:

https://lettcmo03.github.io/Conecta60/

---

## Equipe

Projeto desenvolvido por:

* Antônio de Oliveira Bisneto (@AntonioOliveiraBisneto)
* Eduardo Lima Pereira da Silva (@Craft0629)
* João Pedro Rocha Lopes dos Reis (@joaoplayzx)
* João Gabriel Bruno Batista (@unpoley)
* Letícia de Carvalho Monteiro de Oliveira (@lettcmo03)
* Vinicios de Souza Palácio (@ViniciosPalacio)

---

## Licença

O código deste projeto está disponibilizado sob a licença **MIT**.

Consulte o arquivo [`LICENSE`](LICENSE) para mais informações.

---

**Conecta 60+ — Tecnologia que aproxima, ensina e conecta.**


## Atividade atual e materiais anteriores

A página inicial apresenta o quiz **Tecnologia na prática**, no lugar da lista de
módulos. As páginas HTML das aulas anteriores continuam no repositório para
preservar os materiais, mas não aparecem na área principal de atividades.

## Quiz: Tecnologia na prática

Acesse `quiz.html` ou o botão **Participar do quiz** na página inicial. São 15
situações com quatro alternativas e **Ainda não sei**, sem cronômetro ou ranking.
A identificação é opcional. Cada escolha inclui uma indicação de confiança;
**Ainda não sei** permite avançar sem essa indicação. A correção aparece somente
após concluir, em uma seção que pode ser aberta com a equipe.

O progresso fica no `localStorage` do navegador. É possível retomar perguntas ou
consultar o resumo concluído. A conclusão dispara o envio do resumo ao FormSubmit,
quando o destino está configurado. O apelido, o identificador da atividade, a data,
os acertos e todas as respostas com confiança e assuntos são enviados ao serviço
para encaminhamento ao e-mail da equipe. A página informa esse uso antes do início.
Não há painel central ou banco de dados próprio.

### Ativar o recebimento por e-mail

1. Confirmar com a responsável qual e-mail da equipe deve receber os resumos.
2. Em `assets/js/quiz-config.js`, preencher `destino` com esse e-mail, ou com o
   token público do formulário fornecido pelo FormSubmit. Não colocar senhas nem
   chaves privadas nesse arquivo: ele é público.
3. Publicar o site em HTTPS. Concluir um quiz com dados de teste no endereço
   publicado. A primeira utilização exige confirmação do destinatário por e-mail.
   Abrir a mensagem do FormSubmit e confirmar a ativação.
4. Concluir outro teste e conferir o resumo na caixa de entrada (e no spam), antes
   de aplicar à turma. A resposta de sucesso da API confirma aceitação pelo serviço,
   não entrega na caixa de entrada. Ativação, filtros e limites do provedor ainda
   podem afetar o recebimento.
5. Se preferir não expor o endereço no JavaScript público, substituir pelo token
   público do formulário após configurar o serviço.

O destino foi confirmado pela responsável e configurado como
`conecta60saquarema@gmail.com`. Ainda é necessário confirmar a ativação no e-mail
do FormSubmit e testar o recebimento real após publicar. Se o destino for apagado,
o quiz mantém as respostas locais e informa que o recebimento não está ativado.
A integração segue a API AJAX do FormSubmit:
https://formsubmit.co/ajax-documentation e https://formsubmit.co/.

### Falhas, retomada e cópias

O site só apresenta recebimento confirmado quando o serviço retorna sucesso. Se
estiver sem conexão antes da tentativa, guarda as respostas e tenta quando o
navegador informar que a internet voltou, enquanto a página estiver aberta. Após
falha de rede, resposta inválida ou tempo excedido, disponibiliza tentativa manual;
não faz reenvios ilimitados em segundo plano. Se a página fechar durante o envio,
a retomada avisa que o recebimento é incerto e pede conferir com a equipe antes de
reenviar. Uma resposta aceita não é reenviada automaticamente na retomada. Atividades já
concluídas na versão anterior, que prometia armazenamento apenas local, só são
enviadas se a pessoa acionar o botão de envio na tela do resumo.

Não há garantia de entrega única do provedor: repetir uma requisição cujo resultado
é incerto pode gerar outra cópia. O identificador estável da atividade no resumo
permite reconhecer duplicidades. Evitar responder a mesma atividade em várias abas.

O resumo também pode ser copiado ou baixado em CSV (UTF-8 com BOM; separador ponto
e vírgula). Não publicar arquivos preenchidos no repositório público. Antes de
passar um aparelho a outra pessoa, apagar o progresso pelo botão da tela final.
O gabarito é JavaScript público, não uma área restrita. Áreas e dificuldades são
referências pedagógicas: avaliar também os desafios práticos, sem classificar
participantes apenas pelo total de acertos.

### Executar e conferir

Não é necessário build. Para testar localmente: `python3 -m http.server 8000` e
abrir `http://localhost:8000/quiz.html`. Para conferir o envio real, preferir o site
publicado em HTTPS e um destinatário ativado. Testar em celular antes da oficina;
manter as perguntas em papel como alternativa. O quiz precisa de conexão para
enviar resultados e não tem funcionamento offline garantido.
