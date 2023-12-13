import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ produto }) => (
    <div className={styles.card}>
        <figure>
            <img src={produto.imagem} alt={produto.nome} />
        </figure>
        <div className={styles.container_informacoes}>
            <div>
                <h3>{produto.nome}</h3>
                <small>{produto.categoria}</small>
                <p>{produto.descricao}</p>
            </div>
            <div>
                <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(produto.preco)}</span>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    produto: PropTypes.object
}

export default Card;