import * as moment from 'moment';

/** Classe que gera dados falsos de testes apenas para testar o banco de dados do App */
export class PreencheBancoTeste{

    /** @param qtdItensNaLista - quantidade dos itens de carregamento que terá na lista de carregamento */
    // public static criaListaDeCarregamento(qtdItensNaLista: Number): ListaDeCarregamento{

    //     let listaDeCarregamento = new ListaDeCarregamento();
        
    //     for(let i = 0; i < qtdItensNaLista; i++){
    //         listaDeCarregamento.dadosDoCarregamento.push(this.criaCarregamento(i + 1));
    //     }

    //     listaDeCarregamento.dataDaUltimaAtualizacao = moment().format("D/MM/yyyy - H:mm");

    //     return listaDeCarregamento;
    // }

    // static criaCarregamento(numeroDoItem: Number){

    //     let notaFiscal: DadosDaNotaFiscal = new NotaFiscalEntidade(null).dadosDaNotaFiscal;

    //     notaFiscal.codigoDeCarregamento = "000000000-" + numeroDoItem;

    //     return notaFiscal;
    // }
}