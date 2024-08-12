import styles from './Card.module.css';
import { Produto } from '../../types/Produto';

type CardProps = {
    produto: Produto
}

export default function Card({ produto }: CardProps) {
    return (
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
}