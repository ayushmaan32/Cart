import React from "react";
import CarItem from "./Cartitem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
         products :[
            {
                price:99,
                title: 'Mobile Phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price:999,
                title: 'Laptop',
                qty:1,
                img:'',
                id:2

            },
            {
                price:1999,
                title: 'Tv',
                qty:1,
                img:'',
                id:3

            }
         ]

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);

    }
    render() {
        const{products} = this.state
        return (
            <div className="cart">
                
                {products.map((product) => {
                  return(
                    <CarItem 
                     product={product}
                     key= {product.id}
                     isloggedin={false}
                     jsx = {<h1>Test</h1>}
                    />
                  )
                })}
                
            </div>
        )
    }


}
export default Cart;