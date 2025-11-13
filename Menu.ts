import readlinesync = require("readline-sync");
import { colors } from './src/img/colors';
import { ProdutoFisico } from "./src/model/ProdutoFisico";


const caneta = new ProdutoFisico(1, "Caneta Azul", 2.5, "BIC", 100, "Caneta");
const caderno = new ProdutoFisico(2, "Caderno 100 folhas", 12.9, "Tilibra", 50, "Caderno");
const lapis = new ProdutoFisico(3, "Lápis HB nº2", 1.5, "Faber-Castell", 200, "Lápis");
const borracha = new ProdutoFisico(4, "Borracha Branca", 2.0, "Mercur", 150, "Borracha");
const apontador = new ProdutoFisico(5, "Apontador Duplo", 3.5, "Maped", 80, "Apontador");
const marcaTexto = new ProdutoFisico(6, "Marca Texto Amarelo", 4.9, "Stabilo", 120, "Marca Texto");
const estojo = new ProdutoFisico(7, "Estojo Escolar", 18.9, "Capricho", 40, "Estojo");
const cola = new ProdutoFisico(8, "Cola Branca 90g", 5.0, "Pritt", 60, "Cola");
const tesoura = new ProdutoFisico(9, "Tesoura Escolar", 6.9, "Tramontina", 35, "Tesoura");
const papelSulfite = new ProdutoFisico(10, "Papel Sulfite A4 500 folhas", 32.9, "Chamex", 25, "Papel");


export function main() {
    let opcao: number;

    while (true) {
        console.log(colors.fg.bluestrong, "*****************************************************");
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
        console.log(" 7 - Sair");
        console.log(" ");
        console.log("*****************************************************");
        console.log(" ", colors.reset);
        console.log("Entre com a opção desejada: ");

        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log(colors.fg.bluestrong, "\nPapelaria da Juju - Tudo para sua criatividade!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", colors.reset);
                const id = readlinesync.questionInt("ID: ");
                const nome = readlinesync.question("Nome: ");
                const preco = readlinesync.questionFloat("Preço: ");
                const marca = readlinesync.question("Marca: ");
                const estoque = readlinesync.questionInt("Estoque: ");
                const categoria = readlinesync.question("Categoria: ");
                const novoProduto = new ProdutoFisico(id, nome, preco, marca, estoque, categoria);
                controller.cadastrar(novoProduto);
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                controller.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por ID\n\n", colors.reset);
                const idBusca = readlinesync.questionInt("Digite o ID do produto: ");
                controller.procurarPorId(idBusca);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", colors.reset);
                const idAtualiza = readlinesync.questionInt("ID do produto que deseja atualizar: ");
                const nomeNovo = readlinesync.question("Novo nome: ");
                const precoNovo = readlinesync.questionFloat("Novo preço: ");
                const marcaNova = readlinesync.question("Nova marca: ");
                const estoqueNovo = readlinesync.questionInt("Novo estoque: ");
                const categoriaNova = readlinesync.question("Nova categoria: ");
                const produtoAtualizado = new ProdutoFisico(idAtualiza, nomeNovo, precoNovo, marcaNova, estoqueNovo, categoriaNova);
                controller.atualizar(produtoAtualizado);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar Produto\n\n", colors.reset);
                const idDel = readlinesync.questionInt("Digite o ID do produto a apagar: ");
                controller.deletar(idDel);
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
