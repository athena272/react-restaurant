import { produtos } from '../data/data'

export const buscaProduto = (textoDigitado) => {
    return produtos.filter(produto =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
}

export const filtrarProduto = (categoria) => {
    return produtos.filter(produto => produto.categoria === categoria)
}

export const produtosEntradas = filtrarProduto("Entradas");