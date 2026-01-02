const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>

      <p className="text-gray-600 mb-4">
        Rs. <span className="font-bold text-gray-900">{product.price}</span>
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
