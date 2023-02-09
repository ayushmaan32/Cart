import React from "react";
// import './App.css';
// import CarItem from "./Cartitem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { firestore } from "./firebase";




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true

    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.db = firestore
  }
  
  componentDidMount() {
    
    // //fetching all the products from the cloud firestore
    firestore
    // //query for fecthing the product which we want as per our query
    
    .collection("products") //getting all the products
    // // .where('price','>=', 999) // after fetching db we should write query
    
    .onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
    
      this.setState({
         products: products,
         loading: false 
      });
    
    });
}

  handleIncreaseQuantity = (product) => {
    // console.log('increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products //shorthand when key and values are same
    //   // or 
    //   // products: products  

    // })
    const docRef = firestore.collection('products').doc(products[index].id);
    docRef
     .update({
      qty:products[index].qty + 1
     })
     .then(() => {
      console.log('updated successfully');
     }).catch((error) => {
      console.log('error', error);
     } )
  }
  handleDecreaseQuantity = (product) => {
    // console.log('increase', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products //shorthand when key and values are same
    //   // or 
    //   // products: products  

    // })
    const docRef = firestore.collection('products').doc(products[index].id);
    docRef
     .update({
      qty:products[index].qty - 1
     })
     .then(() => {
      console.log('updated successfully');
     }).catch((error) => {
      console.log('error', error);
     } )


  }
  // delet the product
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // })
    const docRef = firestore.collection('products').doc(id);
    docRef.delete()
    .then(() => {
      console.log('deleted successfully');
     }).catch((error) => {
      console.log('error', error);
     } )
             
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
      return '';
     });

     return totalprice;

  }
  addProduct = () => {
       firestore
      // this.db
       .collection('products')
       .add({
        img:"",
        price:999,
        qty: 3,
        title:'Washing machine'
       })
       .then((docRef) => {
         console.log('product has added', docRef);
       }).catch((error) => {
        console.log('error', error);
       } )

  }
  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count ={this.getCountofQty()}/>
        <button onClick={this.addProduct}>Add a product</button>
        <Cart
         products= {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onhandleDeleteProduct={this.handleDeleteProduct}
        />
         {loading && <h1>Loading page ...</h1>}
        <div style={{padding: 20, fontSize:25}}>TOTAL : {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
