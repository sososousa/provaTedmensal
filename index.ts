import { create, dequeue, enqueue, isEmpty, isFull, peek } from "./fila";
import { Aluno, Fileira } from "./types";

// Lista de nomes dos alunos
const listaDeNomes = [
  "João",
  "Felipe",
  "Maria",
  "José",
  "Ana",
  "Carlos",
  "Pedro",
  "Paulo",
  "Lucas",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Rafael",
  "Ricardo",
  "Jorge",
  "Miguel",
];

// Limite de alunos por fileira
const MAXIMOALUNO = 5;
const quantidadeDeAlunos = listaDeNomes.length;
// Calcula a quantidade de fileiras necessárias
const quantidadeDeFileiras = Math.ceil(quantidadeDeAlunos / MAXIMOALUNO);

// Cria a estrutura da sala de aula
const aula = create(quantidadeDeFileiras);

// Popula cada fileira com alunos
for (let indiceFileira = 0; indiceFileira < quantidadeDeFileiras; indiceFileira++) {
  const fileira: Fileira = {
    numeroDaFileira: indiceFileira,
    alunos: create(MAXIMOALUNO),
  };

  // Adiciona alunos na fileira
  listaDeNomes.forEach((nomeDoAluno) => {
    if (isFull(fileira.alunos)) {
      return;
    }

    const aluno: Aluno = {
      nome: nomeDoAluno,
    };

    enqueue(fileira.alunos, aluno);
  });

  // Remove os alunos adicionados da lista original
  listaDeNomes.splice(0, MAXIMOALUNO);

  // Adiciona a fileira à sala de aula
  enqueue(aula, fileira.alunos);
}

console.log("Estrutura inicial da sala de aula:");
console.log(aula);

// Função principal
main();

function main() {
  // Processa cada fileira da sala de aula
  for (let indiceFileira = 0; indiceFileira < quantidadeDeFileiras; indiceFileira++) {
    const fileiraAtual: Fileira = {
      alunos: peek(aula),
      numeroDaFileira: indiceFileira,
    };

    console.log(`\n=== Fileira ${fileiraAtual.numeroDaFileira + 1} ===\n`);

    // Processa cada aluno na fileira
    for (let indiceCadeira = 0; indiceCadeira < MAXIMOALUNO; indiceCadeira++) {
      if (isEmpty(fileiraAtual.alunos)) {
        break;
      }

      const alunoAtual = dequeue(fileiraAtual.alunos);

      console.log(`- O aluno ${alunoAtual.nome} levantou-se da cadeira ${indiceCadeira + 1}`);
      console.log(`  ${alunoAtual.nome} diz: "Até logo, pessoal!"`);
    }

    console.log("\nFim da fileira");

    // Remove a fileira da sala de aula após processar
    dequeue(aula);
  }

  console.log("\nTodas as fileiras foram processadas. A sala de aula está vazia.");
}
