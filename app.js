alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

setTimeout(() => { //foi adicionado essa linha porque console.log não estava apresentando    os valores
  while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número ente 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
      break;
    } else {
      if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
      } else {
        alert(`O número secreto é maior que ${chute}`);
      }
      tentativas++;
    }
  }

  // variável para guardar palavra 'tentativa' no singular ou plural
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  alert(
    `Isso aí! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
  );
}, 100); // Adiciona um atraso de 100 milissegundos


// Na aula (02), você aprendeu como:
// * Baixar uma cópia de um repositório hospedado no GitHub para o seu computador, utilizando o comando git clone;
// * Realizar alterações no código de um projeto e registrá-las com commits, utilizando os comandos git add e git commit;
// * Visualizar quais arquivos foram modificados no repositório local, utilizando o comando git status;
// * Listar os commits realizados no repositório, com dados do autor, data e mensagem de cada commit, utilizando o comando git log;
// * Visualizar os repositórios remotos linkados com o repositório local, utilizando o comando git remote;
// * Enviar commits feitos no repositório local para o repositório remoto, utilizando o comando git push;
// * Baixar commits do repositório remoto para o repositório local, utilizando o comando git pull;
// * Adicionar uma pessoa como colaboradora em um repositório no GitHub, e também como aceitar um convite de colaboração recebido.
