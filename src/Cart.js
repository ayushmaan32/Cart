import React from "react";
import CarItem from "./Cartitem";

const Cart = (props) => {
   
        const { products } = props
        return (
            <div className="cart">

                {products.map((product) => {
                    return (
                        <CarItem
                            product={product}
                            key={product.id}
                            isloggedin={false}
                            jsx={<h1>Test</h1>}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onhandleDeleteProduct={props.onhandleDeleteProduct}
                        />
                    )
                })}

            </div>
        )
    }



export default Cart;