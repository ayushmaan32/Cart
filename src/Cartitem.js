import React from "react";

class CarItem extends React.Component {
    constructor(){
        super();
        this.state = {
          price:999,
          title: 'Mobile Phone',
          Qty:1,
          img:''

        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);

    }

    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
    render() {
        const {price,title,Qty} =this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="product_image" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontsize:25}}>    {title} </div>
                    <div style={ {color: '#777'}}>Rs {price} </div>
                    <div style={ {color: '#777'}}>Qty: {Qty} </div>
                    <div className="cart-item-actions">
                      {/* buttons */}
                      <img alt="increase"
                       className="action-icons" 
                       src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                       onClick={this.increaseQuantity}
                       />
                      <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                      <img alt="delete"   className="action-icons" src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"/>
                    </div>
                </div>
                
            </div>
        )
    }
}
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CarItem;