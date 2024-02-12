import React from "react";
import CartItem from "./cartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => (
        <CartItem
          product={product}
          key={product.id}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default Cart;
