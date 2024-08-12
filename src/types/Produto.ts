import { Categoria } from "./Categoria"

export type Produto = {
    id: number,
    nome: string,
    categoria: Categoria,
    preco: number,
    descricao: string,
    imagem: string
}