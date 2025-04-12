import React from "react";

const Cart = ({ cart, setCart }) => {
  console.log(cart);

  return (
    <>
      <div className="">
        {cart.length != 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <div className="cart-items">
                <div className="cart-image">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="cart-description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
    </>
  );
};

export default Cart;
