import styles from './SearchField.module.css';
import Lupa from '/assets/lupa.png'

type SearchFieldProps = {
    textoBuscaDigitado: string,
    handleBusca: (textoDigitado: string) => void
}

export default function SearchField({ textoBuscaDigitado, handleBusca }: SearchFieldProps) {
    return (
        <div className={styles.barra_de_pesquisa}>
            <img src={Lupa} alt="icone" width={30} height={30} />
            <input
                type="text"
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
            />
        </div>
    )
}
