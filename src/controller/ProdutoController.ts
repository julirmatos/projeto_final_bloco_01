import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Produto[] = [];

    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`\n✅ Produto "${produto.getNome()}" cadastrado com sucesso!\n`);
    }


    public atualizar(produtoAtualizado: Produto): void {
        const indice = this.listaProdutos.findIndex(p => p.getId() === produtoAtualizado.getId());

        if (indice !== -1) {
            this.listaProdutos[indice] = produtoAtualizado;
            console.log(`\n♻️ Produto com ID ${produtoAtualizado.getId()} atualizado com sucesso!\n`);
        } else {
            console.log(`\n❌ Produto com ID ${produtoAtualizado.getId()} não encontrado.\n`);
        }
    }


    public listarTodos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("\n⚠️ Nenhum produto cadastrado.\n");
            return;
        }

        console.log("\n📦 Lista de Produtos:\n");
        this.listaProdutos.forEach(produto => produto.visualizar());
    }


    public procurarPorId(id: number): void {
        const produto = this.buscarNoArray(id);

        if (produto) {
            console.log("\n🔍 Produto encontrado:\n");
            produto.visualizar();
        } else {
            console.log(`\n❌ Produto com ID ${id} não encontrado.\n`);
        }
    }


    public deletar(id: number): void {
        const indice = this.listaProdutos.findIndex(p => p.getId() === id);

        if (indice !== -1) {
            const produtoRemovido = this.listaProdutos.splice(indice, 1);
            console.log(`\n🗑️ Produto "${produtoRemovido[0]?.getNome()}" removido com sucesso!\n`);
        } else {
            console.log(`\n❌ Produto com ID ${id} não encontrado.\n`);
        }
    }


    private buscarNoArray(id: number): Produto | undefined {
        return this.listaProdutos.find(produto => produto.getId() === id);
    }
}
