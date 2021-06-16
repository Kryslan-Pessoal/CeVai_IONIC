import { Itinerarios } from "./Itinerario";

export class Usuario{
    idUsuario: number;
    email: string;
    nome: string;

    itinerariosCadastrados: Itinerarios;

    //Informações Extras
    nomeCompleto: string;
    telefone: string;
    idade: number;
    cpf: string;
}
export class Aluno extends Usuario{
    idResonsavel: number;
    idMotorista: number;
}
export class Responsavel extends Usuario{
    idAluno: number;
    idMotorista: number;
}
export class Motorista extends Usuario{
    idAlunos: number[];
    idResponsavel: number;
}