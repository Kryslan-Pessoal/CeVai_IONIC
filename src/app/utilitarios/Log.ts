/** 
 * Gera Logs visíveis para melhor Implementação e Debug 
 ***/
 export default class Log {
    
    /**
     * Use para dar informações úteis para programadores.
     * @param nomeDaVariavel - nome da variável observada.
     * @param valorDaVariavel - valor que a variável guarda.
     */
     public static i(informacao: string) {
        console.log(CorDoTexto.CYAN, '💡 INFORMAÇÃO 🡆🡆🡆 ' + informacao);
        console.log('');
    }
    /**
     * Use para dar informações úteis de variáveis para programadores.
     * @param nomeDaVariavel - nome da variável observada.
     * @param valorDaVariavel - valor que a variável guarda.
     */
     public static iv(nomeDaVariavel: string, valorDaVariavel: any) {
        console.log(CorDoTexto.CYAN, '💡' + nomeDaVariavel + ' 🡆🡆🡆 ' + valorDaVariavel);
        console.log('');
    }
    /**
     * Use para Observar valores de variáveis.
     * @param nomeDaVariavel - nome da variável observada.
     * @param valorDaVariavel - valor que a variável guarda.
     */
    public static d(nomeDaVariavel: string, valorDaVariavel: any) {
        console.log(
            CorDoFundo.GREEN, 
            '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 🐞DEBUG🐞 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓'
        );
        console.log(nomeDaVariavel + ':\n🡆🡆🡆' + valorDaVariavel);
        console.log('');
    }

    /**
     * Use para Erros e exception
     */
     public static e(erro: any) {
        console.log(
            CorDoTexto.RED, 
            '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ❌ERRO❌ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓'
        );
        console.log(CorDoTexto.RED, erro);
        console.log('');
    }
    /**
    * Use para Erros não críticos
    */
    public static w(mensagem: any) {
        console.log(
            CorDoTexto.YELLOW, 
            '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ⚠️ATENÇÃO⚠️ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓'
        );
        console.log(CorDoTexto.YELLOW, mensagem);
        console.log('');
    }
    /**
     * Use para Erros CRÍTICOS
     */
     public static wtf(erro: any) {
        console.log(
            CorDoFundo.RED, 
            '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ ❌ERRO❌ ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓'
        );
        console.log(CorDoTexto.RED, erro);
        console.log('');
    }
}
//#region valores de cor

/** Variável que força o App a usar a cor especificada, 
 * mesmo se for resetada pelo navegador por padrão */
let RESET_COLOR = '%s\x1b[0m';

/** Obs: só é possível escolher a cor do texto OU a cor do fundo!
 * Nunca dá para escolher os 2 ao mesmo tempo. */
class CorDoTexto{
    static BLACK = '\x1b[30m' + RESET_COLOR;
    static RED = '\x1b[31m' + RESET_COLOR;
    static GREEN = '\x1b[32m' + RESET_COLOR;
    static YELLOW = '\x1b[33m' + RESET_COLOR;
    static BLUE = '\x1b[34m' + RESET_COLOR;
    static MAGENTA = '\x1b[35m' + RESET_COLOR;
    static CYAN = '\x1b[36m' + RESET_COLOR;
    static WHITE = '\x1b[37m' + RESET_COLOR;
}
/** Obs: só é possível escolher a cor do texto OU a cor do fundo!
 * Nunca dá para escolher os 2 ao mesmo tempo. */
class CorDoFundo{
    static BLACK = '\x1b[40m' + RESET_COLOR;
    static RED = '\x1b[41m' + RESET_COLOR;
    static GREEN = '\x1b[42m' + RESET_COLOR;
    static YELLOW = '\x1b[43m' + RESET_COLOR;
    static BLUE = '\x1b[44m' + RESET_COLOR;
    static MAGENTA = '\x1b[45m' + RESET_COLOR;
    static CYAN = '\x1b[46m' + RESET_COLOR;
    static WHITE = '\x1b[47m' + RESET_COLOR;
}
//#endregion valores de cor