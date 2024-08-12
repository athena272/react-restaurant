import styles from './HomePage.module.css'
import Banner from '/assets/banner.png'
import { useState } from 'react'
import { filtrarProduto, buscaProduto, produtosEntradas } from '../../service'
import Card from '../Card'
import Category from '../Category'
import SearchField from '../SearchField'
import { Categoria } from '../../types/Categoria'

export default function HomePage() {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas)
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("")

    const [botaoClicado, setBotaoClicado] = useState("Entradas")

    const handleBusca = (textoDigitado: string) => {
        setTextoBuscaDigitado(textoDigitado)
        if (textoBuscaDigitado.length >= 1) {
            setDadosFiltrados(buscaProduto(textoDigitado))
        }
        setBotaoClicado("")
    }

    const handleFiltro = (categoria: Categoria) => {
        setTextoBuscaDigitado("")
        setDadosFiltrados(filtrarProduto(categoria))
        setBotaoClicado(categoria)
    }

    return (
        <div>
            <header className={styles.banner}>
                <img src={Banner} alt="banner" />
                <div>
                    <h1>RESTAURANT</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso cardápio é um
                        requinte de sabores refinados.
                    </p>
                </div>
            </header>
            <main className={styles.container_principal}>
                <Category handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

                <SearchField
                    textoBuscaDigitado={textoBuscaDigitado}
                    handleBusca={handleBusca}
                />

                <section className={styles.secao_cards}>
                    <div>
                        <h2>Cardápio</h2>
                    </div>

                    <div className={styles.container_cards}>
                        {dadosFiltrados.map((produto) => (
                            <Card key={produto.id} produto={produto} />
                        ))}
                    </div>

                </section>
            </main>
        </div>
    )
}
