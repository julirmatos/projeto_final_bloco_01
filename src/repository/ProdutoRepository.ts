import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    // Cadastrar um novo produto
    cadastrar(produto: Produto): void;

    // Atualizar produto existente
    atualizar(produto: Produto): void;

    // Listar todos os produtos
    listarTodos(): void;

    // Buscar produto por ID
    procurarPorId(id: number): void;

    // Deletar produto
    deletar(id: number): void;

}
