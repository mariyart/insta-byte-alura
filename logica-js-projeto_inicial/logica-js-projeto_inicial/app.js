alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 20;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`)
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'testativas' : 'tentativa';
alert(`Isso ai! Vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
