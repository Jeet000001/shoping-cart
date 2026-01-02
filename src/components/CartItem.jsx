import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
      
      {/* Left Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>

        <p className="text-gray-600">
          Rs. {item.price}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 active:scale-90 transition"
          >
            <FaMinus size={12} />
          </button>

          <span className="min-w-[24px] text-center font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 active:scale-90 transition"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 transition"
        title="Remove item"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
};

export default CartItem;
