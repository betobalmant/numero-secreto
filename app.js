alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 10;
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
