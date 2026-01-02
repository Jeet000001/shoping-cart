import CartItem from "./CartItem";

const Cart = ({ cart, onUpdateQuantity, onRemove, total }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-600">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Shopping Cart
      </h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemove}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="border-t mt-6 pt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          Total:{" "}
          <span className="text-blue-600">
            Rs. {typeof total === "string" ? total : total.toFixed(2)}
          </span>
        </h3>

        <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 active:scale-95 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
