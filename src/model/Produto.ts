export abstract class Produto {
    constructor(
        protected id: number,
        protected nome: string,
        protected preco: number
    ) { }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public abstract visualizar(): void;
}
