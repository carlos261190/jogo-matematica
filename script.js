const perguntas = [
  {
    pergunta: "Quantos números vizinhos existem entre 10 e 15?",
    opcoes: ["14 e 12", "11 e 13", "15 e 16"],
    resposta: 1 // 11 e 13 são os vizinhos
  },
  {
    pergunta: "O que pesa mais: 1 quilo de tijolos ou 1 quilo de algodão?",
    opcoes: ["Tijolos", "Algodão", "Pesam o mesmo"],
    resposta: 3 // Pesam o mesmo
  },
  {
    pergunta: "Quantas dezenas tem em 50?",
    opcoes: ["5", "6", "4"],
    resposta: 1 // 5 dezenas
  },
  {
    pergunta: "Quantas maçãs existem em meia dúzia?",
    opcoes: ["5", "6", "12"],
    resposta: 2 // 6 maçãs
  }
];

let perguntaAtual = 0;

function carregarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  document.getElementById("pergunta").textContent = pergunta.pergunta;
  document.getElementById("resposta1").textContent = pergunta.opcoes[0];
  document.getElementById("resposta2").textContent = pergunta.opcoes[1];
  document.getElementById("resposta3").textContent = pergunta.opcoes[2];
}

function verificarResposta(resposta) {
  const respostaCorreta = perguntas[perguntaAtual].resposta;
  if (resposta === respostaCorreta) {
    alert("Correto!");
  } else {
    alert("Errado! Tente novamente.");
  }

  perguntaAtual = (perguntaAtual + 1) % perguntas.length;
  carregarPergunta();
}

carregarPergunta(); // Carrega a primeira pergunta
