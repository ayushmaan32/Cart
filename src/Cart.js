import React from "react";
import CarItem from "./Cartitem";

class Cart extends React.Component {

    render() {
        return (
            <div className="cart">
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
                <CarItem />
            </div>
        )
    }


}
export default Cart;