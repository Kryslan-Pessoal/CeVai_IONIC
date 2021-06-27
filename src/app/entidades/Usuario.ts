export class Usuario{
    idUsuario: number;
    email: string;
    nome: string;

    //Informações Extras
    nomeCompleto: string;
    telefone: string;
    idade: number;
    cpf: string;
}

//ALUNO
export class Aluno extends Usuario{
    idResonsavel: number;
    idMotorista: number;
}
export class ListaDeAluno{
    aluno: Aluno[] = [];
}

//MOTORISTA
export class Motorista extends Usuario{
    idAlunos: number[] = [];
    idResponsavel: number;
}

//RESPONSÁVEL
export class Responsavel extends Usuario{
    idAluno: number;
    idMotorista: number;
}