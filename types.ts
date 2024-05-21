// Define a estrutura de um aluno
export interface Aluno {
    nome: string;
  }
  
  // Define a estrutura de uma fileira de alunos
  export interface Fileira {
    // Número que identifica a fileira
    numeroDaFileira: number;
    // Lista de alunos na fileira
    alunos: Aluno[];
  }
  