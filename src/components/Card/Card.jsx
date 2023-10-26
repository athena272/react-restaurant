import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ produto }) => (
    <div className="card">
        <figure>
            <img src={produto.imagem} alt={produto.nome} loading='lazy'/>
        </figure>
        <div className="container-informacoes">
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