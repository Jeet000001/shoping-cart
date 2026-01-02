import useCart from "./hooks/useCart";
import { Products } from "./data/product.js";
import ProductCard from "./components/ProductCard";

const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Shopping Cart
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

      </main>
    </div>
  );
};

export default App;
