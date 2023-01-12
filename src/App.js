import React from "react";
// import './App.css';
// import CarItem from "./Cartitem";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          id: 2

        },
        {
          price: 1999,
          title: 'Tv',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          id: 3

        }
      ]

    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);

  }
  handleIncreaseQuantity = (product) => {
    // console.log('increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products //shorthand when key and values are same
      // or 
      // products: products  

    })
  }
  handleDecreaseQuantity = (product) => {
    // console.log('increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products //shorthand when key and values are same
      // or 
      // products: products  

    })
  }
  // delet the product
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }
   getCountofQty = () => {
     const {products} = this.state;

     let count =0;
     products.forEach(product => {
      count += product.qty;
     });

     return count;
  }
  getCartTotal = () => {
    const {products} = this.state;

    let totalprice =0;
    products.forEach(product => {
      totalprice = totalprice + product.qty * product.price;
     });

     return totalprice;

  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count ={this.getCountofQty()}/>
        <Cart
         products= {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onhandleDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 20, fontSize:25}}>TOTAL : {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
