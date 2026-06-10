
const perguntas = [
{pergunta:"1. Qual é a principal função do HTML em uma página web?",alternativas:["Definir a aparência visual","Criar animações","Definir a estrutura e o conteúdo da página","Gerenciar banco de dados"],correta:2},
{pergunta:"2. HTML significa:",alternativas:["HyperText Markup Language","HighText Modern Language","Hyper Transfer Machine Language","Hyper Tool Markup Language"],correta:0},
{pergunta:"3. Qual das opções representa corretamente uma tag HTML com abertura e fechamento?",alternativas:["<p>Texto<p>","<p>Texto</p>","</p>Texto<p>","<p/>Texto"],correta:1},
{pergunta:"4. Qual é um exemplo de tag vazia (autofechada)?",alternativas:["<div>","<section>","<img />","<p>"],correta:2},
{pergunta:"5. Em uma página HTML, qual elemento contém os conteúdos visíveis ao usuário?",alternativas:["<head>","<meta>","<title>","<body>"],correta:3},
{pergunta:"6. Qual elemento HTML5 representa o conteúdo principal da página?",alternativas:["<footer>","<aside>","<main>","<nav>"],correta:2},
{pergunta:"7. Qual tag é usada para representar uma área de navegação?",alternativas:["<section>","<article>","<header>","<nav>"],correta:3},
{pergunta:"8. Uma das vantagens da semântica em HTML5 é:",alternativas:["Alterar automaticamente o design","Melhorar acessibilidade e SEO","Substituir CSS","Eliminar JavaScript"],correta:1},
{pergunta:"9. Qual tag é utilizada para criar formulários?",alternativas:["<input>","<form>","<fieldset>","<label>"],correta:1},
{pergunta:"10. O atributo action da tag form define:",alternativas:["O método HTTP utilizado","A validação dos campos","A URL que receberá os dados","O estilo do formulário"],correta:2},
{pergunta:"11. Qual método HTTP é normalmente usado para envio de dados em formulários?",alternativas:["GET e POST","PUT e DELETE","LINK e PATH","OPEN e CLOSE"],correta:0},
{pergunta:"12. Qual tipo de input é indicado para e-mails?",alternativas:["text","number","email","password"],correta:2},
{pergunta:"13. Qual tipo de input permite selecionar apenas uma opção em um grupo?",alternativas:["checkbox","radio","file","text"],correta:1},
{pergunta:"14. Qual elemento melhora a acessibilidade ao associar uma descrição a um campo?",alternativas:["<table>","<audio>","<label>","<article>"],correta:2},
{pergunta:"15. Qual atributo torna um campo obrigatório?",alternativas:["mandatory","force","required","validate"],correta:2},
{pergunta:"16. Qual elemento agrupa campos relacionados em um formulário?",alternativas:["<fieldset>","<main>","<header>","<aside>"],correta:0},
{pergunta:"17. Qual tag é usada para inserir áudio em HTML5?",alternativas:["<music>","<sound>","<audio>","<media>"],correta:2},
{pergunta:"18. O atributo controls em um elemento audio serve para:",alternativas:["Alterar o volume automaticamente","Mostrar controles de reprodução","Baixar o áudio","Ocultar o áudio"],correta:1},
{pergunta:"19. Qual tag é utilizada para exibir vídeos?",alternativas:["<media>","<movie>","<video>","<screen>"],correta:2},
{pergunta:"20. Tabelas HTML são usadas para:",alternativas:["Criar menus","Exibir dados em linhas e colunas","Inserir imagens","Executar scripts"],correta:1},
{pergunta:"21. CSS significa:",alternativas:["Computer Style System","Creative Style Sheets","Cascading Style Sheets","Central Style Syntax"],correta:2},
{pergunta:"22. Qual é a principal função do CSS?",alternativas:["Estruturar a página","Criar banco de dados","Controlar a aparência visual","Executar lógica de programação"],correta:2},
{pergunta:"23. Qual forma de CSS utiliza um arquivo separado?",alternativas:["Inline","Interno","Externo","Embutido"],correta:2},
{pergunta:"24. Qual seletor CSS seleciona todos os elementos da página?",alternativas:["#",".","*","@"],correta:2},
{pergunta:"25. Qual seletor CSS seleciona um elemento por ID?",alternativas:[".nome","*nome","@nome","#nome"],correta:3},
{pergunta:"26. No Box Model, qual camada representa o espaço externo da borda?",alternativas:["Border","Padding","Margin","Content"],correta:2},
{pergunta:"27. No Box Model, qual camada envolve diretamente o conteúdo?",alternativas:["Margin","Border","Padding","Header"],correta:2},
{pergunta:"28. O que é um framework?",alternativas:["Um banco de dados","Uma estrutura reutilizável para desenvolvimento","Um navegador","Uma linguagem de programação"],correta:1},
{pergunta:"29. Qual framework foi estudado para desenvolvimento responsivo?",alternativas:["Angular","React","Vue","Bootstrap"],correta:3},
{pergunta:"30. No Bootstrap, o sistema Grid divide a tela em:",alternativas:["8 colunas","10 colunas","12 colunas","16 colunas"],correta:2},
{pergunta:"31. A classe col-12 ocupa:",alternativas:["Metade da linha","Um quarto da linha","Toda a linha","Três quartos da linha"],correta:2},
{pergunta:"32. JavaScript é uma linguagem que:",alternativas:["Roda apenas no servidor","Roda no navegador e adiciona interatividade","Substitui HTML","Substitui CSS"],correta:1},
{pergunta:"33. Qual palavra-chave é usada para declarar uma variável que pode ser alterada?",alternativas:["fixed","const","let","final"],correta:2},
{pergunta:"34. Qual palavra-chave é usada para declarar um valor que não pode ser reatribuído?",alternativas:["let","var","value","const"],correta:3},
{pergunta:"35. Qual estrutura armazena vários valores em JavaScript?",alternativas:["Object","Array","Function","Event"],correta:1},
{pergunta:"36. O DOM é:",alternativas:["Um banco de dados","Uma API de rede","Uma representação em árvore do HTML","Um framework"],correta:2},
{pergunta:"37. Qual método seleciona o primeiro elemento correspondente a um seletor CSS?",alternativas:["getElementById()","getElementsByClassName()","querySelector()","querySelectorAll()"],correta:2},
{pergunta:"38. Qual propriedade deve ser usada com cuidado devido ao risco de XSS?",alternativas:["textContent","innerText","innerHTML","value"],correta:2},
{pergunta:"39. Qual método é usado para adicionar um ouvinte de eventos?",alternativas:["addFunction()","addListener()","addEventListener()","createEvent()"],correta:2},
{pergunta:"40. A Fetch API é utilizada para:",alternativas:["Criar elementos HTML","Aplicar estilos CSS","Fazer requisições HTTP assíncronas","Criar animações"],correta:2}
];

const container=document.getElementById("questoes");
perguntas.forEach((q,index)=>{
 let html=`<div class="questao"><p><strong>${q.pergunta}</strong></p>`;
 q.alternativas.forEach((alt,i)=>{
  html+=`<label><input type="radio" name="q${index}" value="${i}"> ${alt}</label><br>`;
 });
 html+="</div>";
 container.innerHTML+=html;
});

function corrigir(){
 let acertos=0;
 let erros=[];
 perguntas.forEach((q,index)=>{
   const r=document.querySelector(`input[name="q${index}"]:checked`);
   if(r && Number(r.value)===q.correta){acertos++;}
   else if(r){
      erros.push(`Questão ${index+1}: marcada "${q.alternativas[r.value]}" | correta "${q.alternativas[q.correta]}"`);
   } else {
      erros.push(`Questão ${index+1}: não respondida | correta "${q.alternativas[q.correta]}"`);
   }
 });
 let nota=(acertos/perguntas.length*10).toFixed(1);
 let out=`<h2>Resultado</h2><p><b>Acertos:</b> ${acertos}/${perguntas.length}</p><p><b>Nota:</b> ${nota}/10</p>`;
 if(erros.length){
   out+="<h3>Questões incorretas</h3><ul>"+erros.map(e=>`<li>${e}</li>`).join("")+"</ul>";
 }
 document.getElementById("resultado").innerHTML=out;
}
