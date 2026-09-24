const topics = {
  internet: {title:'Celular e internet',copy:'Algumas funções do celular funcionam sem internet. Para conversar e acessar sites, confira se o Wi-Fi ou os dados móveis estão ligados. Se algo não carregar, verifique a conexão antes de tentar novamente.',page:4},
  whatsapp: {title:'WhatsApp',copy:'No WhatsApp, você pode procurar contatos, enviar áudios e fotos e compartilhar um número já salvo. Confira a conversa escolhida antes de enviar.',page:7},
  seguranca: {title:'Segurança digital',copy:'Mensagens que pedem pressa merecem cuidado. Antes de tocar em um link ou informar dados, confirme a solicitação pelo aplicativo ou pelo canal oficial da instituição.',page:9},
  pix: {title:'Banco e PIX',copy:'Antes de confirmar uma operação, leia com calma os dados que aparecem na tela. Se algo parecer estranho, interrompa a operação e procure o atendimento oficial do banco.',page:11},
  redes: {title:'Redes sociais e privacidade',copy:'Nas redes sociais, pense em quem poderá ver suas fotos e informações. Confira as configurações de privacidade e evite divulgar dados pessoais sem necessidade.',page:12}
};
const lesson=document.getElementById('aula');
document.querySelectorAll('[data-topic]').forEach(button=>button.addEventListener('click',()=>{
  const topic=topics[button.dataset.topic];
  document.getElementById('lesson-title').textContent=topic.title;
  document.getElementById('lesson-copy').textContent=topic.copy;
  document.getElementById('lesson-link').href=`assets/apostila-conecta-60-mais.pdf#page=${topic.page}`;
  lesson.hidden=false;
  lesson.scrollIntoView({behavior:'smooth',block:'nearest'});
}));
document.getElementById('close-lesson').addEventListener('click',()=>{lesson.hidden=true;document.getElementById('topics-title').focus();});
