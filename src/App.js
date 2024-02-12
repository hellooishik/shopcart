import React from "react";
import Cart from "./Components/cart";
import Navbar from "./Components/navbar";
import "./index.css";

class App extends React.Component {
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

  handleDecreaseQuantity = (product) => {
    console.log("Please Decrease the Quantity", product);
    const { products } = this.state;
    let index = products.indexOf(product);

    products[index].qty -= 1;
    if (products[index].qty <= 0) {
      products.splice(index, 1);
      alert(
        "The quantity of " +
          product.title +
          " has reached zero and has been removed from your Cart"
      );
    }

    this.setState({ products: [...products] });
  };

  handleIncreaseQuantity = (product) => {
    console.log("Please Increase the quantity", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: [...products],
    });
  };

  handleDelection = (id) => {
    const { products } = this.state;
    const newProducts = products.filter((item) => item.id !== id);
    this.setState({ products: newProducts });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDeleteProduct={this.handleDelection}
        />
      </div>
    );
  }
}

export default App;
