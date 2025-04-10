import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../utilis/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border p-4 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-lg" />
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-lg font-bold mt-2">₹{item.price}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-2 text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={handleClear}
              className="text-red-700 border border-red-700 px-4 py-2 rounded hover:bg-red-100 transition"
            >
              Clear Cart
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Price Details</h3>
            <div className="flex justify-between mb-2">
              <span>Total MRP</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span className="text-green-600">-$10.0</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-4">
              <span>Total Amount</span>
              <span>${total - 10}</span>
            </div>
            <button className="w-full mt-6 bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
