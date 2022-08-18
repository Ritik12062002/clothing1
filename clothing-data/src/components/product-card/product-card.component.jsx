import Button from "../button/btn-component"
import './product-card.scss'

const ProductCard = ({product})=>{
    const {name,imageUrl,price, } = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonTypes="inverted"> Add to cart</Button>
        </div>
    )
}



export default ProductCard;