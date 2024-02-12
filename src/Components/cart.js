import React from "react";
import CartItem from "./cartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }

  // Function To handle the Decrese Quantity
  // this file is based on cart item Decrease method
  handleDecreaseQuantity = (product) => {
    console.log("Please Decrease the Quantity", product);
    const { products } = this.state;
    let index = products.indexOf(product);

    // Logical Implementation
    products[index].qty -= 1;
    if (products[index].qty <= 0) {
      // Remove the item from the cart
      products.splice(index, 1);
      alert(
        "The quantity of " +
          product.title +
          " has reached zero and has been removed from your Cart"
      );
    }

    // Update the state
    this.setState({ products: [...products] });
  };

  // This file is loced in the function of HandleIncrese quantity
  handleIncreaseQuantity = (product) => {
    console.log("Please Increase the quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // Finding the leap index
    products[index].qty += 1;
    this.setState({
      products: [...products],
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => (
          <CartItem
            product={product}
            key={product.id}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onIncreaseQuantity={this.handleIncreaseQuantity}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
