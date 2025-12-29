import { FashopingCart} from "react-icons"

const ProductCard = ({product, onAddToCart}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={() => onAddToCart(product)}><FashopingCart /> Add to Cart</button>
    </div>
  )
}

export default ProductCard