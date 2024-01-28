import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product__wrapper">
            <img className="product__image" src={product.imageUrl} alt={product.title }/>
            <span className='product__price-row'>
                <p className={product.discount ? 'product__price discount' : 'product__price'}>
                { product.discount ? product.price * product.discount + ' ₽' : product.price + ' ₽' }
            </p>
                { product.discount && (
                    <p className="product__text-through">
                        { product.price + ' ₽' }
                    </p>
                )
                }
            </span>
            <h2 className="product__title">{ product.title }</h2>
        </div>
    )
}
export default ProductCard;