import ProductCard from '../card/ProductCard.jsx';
import './CardList.css';

const CardList = ({products}) => {
    return (
        <ul className="product-list">
            {
                products.map(product => (
                    <li className="product-list__item" key={ product.id }>
                        <ProductCard product={product} />
                    </li>
                ))}
        </ul>
    )
}
export default CardList;