import styles from './Category.module.css'

import icone1 from "/assets/entrada.png";
import icone2 from "/assets/massa.png";
import icone3 from "/assets/carne.png";
import icone4 from "/assets/bebidas.png";
import icone5 from "/assets/salada.png";
import icone6 from "/assets/sobremesa.png";
import { Categoria } from '../../types/Categoria';

type CategoryProps = {
    handleFiltro: (categoria: Categoria) => void,
    botaoClicado: string,
}

export default function Category({ handleFiltro, botaoClicado }: CategoryProps) {
    return (
        <section className={styles.secao_categorias}>
            <div className={styles.container_botoes}>

                <button className={botaoClicado === "Entradas" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Entradas")}>
                    <img src={icone1} alt="ícone" width={20} height={20} />Entradas
                </button>

                <button className={botaoClicado === "Massas" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Massas")}>
                    <img src={icone2} alt="ícone" width={20} height={20} />Massas
                </button>

                <button className={botaoClicado === "Carnes" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Carnes")}>
                    <img src={icone3} alt="ícone" width={20} height={20} />Carnes
                </button>
                <button className={botaoClicado === "Bebidas" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Bebidas")}>
                    <img src={icone4} alt="ícone" width={20} height={20} />Bebidas
                </button>
                <button className={botaoClicado === "Saladas" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Saladas")}>
                    <img src={icone5} alt="ícone" width={20} height={20} />Saladas
                </button>
                <button className={botaoClicado === "Sobremesas" ? styles.acenderBtn : styles.apagarBtn}
                    onClick={() => handleFiltro("Sobremesas")}>
                    <img src={icone6} alt="ícone" width={20} height={20} />Sobremesas
                </button>

            </div>
        </section>
    )
}