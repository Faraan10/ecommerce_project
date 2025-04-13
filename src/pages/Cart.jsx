import React from "react";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const Cart = ({ cart, setCart }) => {
  // Delete product
  const deleteCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    toast.error("Item removed from cart");
  };

  // Increase quantity
  const increaseQty = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQty = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 text-base-content min-h-screen mt-10">
      {/* Left Side: Cart Items (55%) of the screen */}
      <div className="w-full md:w-[55%]">
        {cart.length !== 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 bg-base-300 rounded-md my-3"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="sm:w-28 h-28 md:w-50 h-40 object-cover"
              />
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-primary-content">₹{item.price}</p>
                <p className="text-base-content font-bold">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  className="px-3 py-1 bg-base-200 rounded hover:bg-base-100 cursor-pointer"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-base-200 rounded hover:bg-base-100 cursor-pointer"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>
              <button onClick={() => deleteCart(item.id)}>
                <Trash className="w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-base-300 text-xl">
            🛒 Your cart is empty
          </div>
        )}
      </div>

      {/* Right Side: Summary (25%) of the screen */}
      <div className="w-full md:w-[25%] bg-base-300 p-6 rounded-xl h-fit my-3 ">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <div className="flex justify-between text-lg mb-4">
          <span>Total Items:</span>
          <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-base-content mb-6">
          <span>Total Amount:</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
        <button
          className="w-full btn btn-soft btn-info hover:bg-blue-500 text-base-content py-2 rounded-lg text-lg"
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
