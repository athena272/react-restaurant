import { produtos } from '../data/data'
import { Categoria } from '../types/Categoria'

export const buscaProduto = (textoDigitado: string) => {
    return produtos.filter(produto =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}

export const filtrarProduto = (categoria: Categoria) => {
    return produtos.filter(produto => produto.categoria === categoria )
}

export const produtosEntradas = filtrarProduto("Entradas");