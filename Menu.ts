import readlinesync = require("readline-sync");
import { colors } from './src/img/colors';

export function main() {

    let opcao: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.bluestrong, "*****************************************************");
        console.log(" ");
        console.log("              PAPELARIA DA JUJU");
        console.log(" ");
        console.log("*****************************************************");
        console.log(" ");
        console.log(" 1 - Cadastrar Produto");
        console.log(" 2 - Listar todos os Produtos");
        console.log(" 3 - Buscar Produto por ID");
        console.log(" 4 - Atualizar Produto");
        console.log(" 5 - Apagar Produto");
        console.log(" 6 - Registrar Venda");
        console.log(" 7 - Sair");
        console.log(" ");
        console.log("*****************************************************");
        console.log(" ", colors.reset);
        console.log("Entre com a opção desejada: ");

        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log(colors.bg.black, colors.fg.bluestrong, "\nPapelaria da Juju - Tudo para sua criatividade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);
                // lógica futura de cadastro
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                // lógica futura de listagem
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por ID\n\n", colors.reset);
                // lógica futura de busca
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);
                // lógica futura de atualização
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar Produto\n\n", colors.reset);
                // lógica futura de exclusão
                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong, "\n\nRegistrar Venda\n\n", colors.reset);
                // lógica futura de venda
                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log(colors.bg.black, colors.fg.bluestrong, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Juliana Matos");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
