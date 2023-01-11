import React from "react";
import CarItem from "./Cartitem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 2

                },
                {
                    price: 1999,
                    title: 'Tv',
                    qty: 1,
                    img: '',
                    id: 3

                }
            ]

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);

    }
    handleIncreaseQuantity = (product) => {
        // console.log('increase', product);
        const { products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;

        this.setState ({
            products //shorthand when key and values are same
            // or 
            // products: products  
            
        })
    }
    handleDecreaseQuantity = (product) => {
        // console.log('increase', product);
        const { products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
          return ;
        }
        products[index].qty -=1;

        this.setState ({
            products //shorthand when key and values are same
            // or 
            // products: products  
            
        })
    }
    // delet the product
    handleDeleteProduct = (id) => {
      const {products} =this.state;
      const items = products.filter((item) =>  item.id !== id );

      this.setState({
        products:items
      })
    }
    render() {
        const { products } = this.state
        return (
            <div className="cart">

                {products.map((product) => {
                    return (
                        <CarItem
                            product={product}
                            key={product.id}
                            isloggedin={false}
                            jsx={<h1>Test</h1>}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onhandleDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                })}

            </div>
        )
    }


}
export default Cart;