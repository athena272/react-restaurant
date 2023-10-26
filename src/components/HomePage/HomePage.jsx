import './HomePage.css'
import Banner from '/assets/banner.png'
import { useState } from 'react'
import { filtrarProduto, buscaProduto, produtosEntradas } from '../../service'
import Card from '../Card/Card'
import Category from '../Category/Category'
import SearchField from '../SearchField/SearchField'

const Home = () => {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas)
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("")

    const [botaoClicado, setBotaoClicado] = useState("Entradas")

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado)
        textoDigitado.length >= 3 && setDadosFiltrados(buscaProduto(textoDigitado))
        setBotaoClicado("")
    }

    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("")
        setDadosFiltrados(filtrarProduto(categoria))
        setBotaoClicado(categoria)
    }

    return (
        <div>
            <header className="banner">
                <img src={Banner} alt="banner" />
                <div>
                    <h1>RESTAURANT</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso cardápio é um
                        requinte de sabores refinados.
                    </p>
                </div>
            </header>
            <main className="container-principal">
                <Category handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

                <SearchField
                    textoBuscaDigitado={textoBuscaDigitado}
                    handleBusca={handleBusca}
                />

                <section className="secao-cards">
                    <div>
                        <h2>Cardápio</h2>
                    </div>

                    <div className="container-cards">
                        {dadosFiltrados.map((produto) => (
                            <Card key={produto.id} produto={produto} />
                        ))}
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Home;