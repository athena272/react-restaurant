import styles from './SearchField.module.css';
import Lupa from '/assets/lupa.png'
import PropTypes from 'prop-types';

const SearchField = ({ textoBuscaDigitado, handleBusca }) => (
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

SearchField.propTypes = {
    textoBuscaDigitado: PropTypes.string,
    handleBusca: PropTypes.func
}

export default SearchField