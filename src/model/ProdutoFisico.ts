import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {
    constructor(
        id: number,
        nome: string,
        preco: number,
        private marca: string,
        private quantidadeEstoque: number,
        private categoria: string
    ) {
        super(id, nome, preco);
    }

    // Getters e Setters
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getQuantidadeEstoque(): number {
        return this.quantidadeEstoque;
    }

    public setQuantidadeEstoque(quantidade: number): void {
        this.quantidadeEstoque = quantidade;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    // Sobrescrita do método visualizar (Polimorfismo)
    public visualizar(): void {
        console.log("\n--- Produto Físico ---");
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Estoque disponível: ${this.quantidadeEstoque} unidades`);
    }
}
