import React from "react";

class CarItem extends React.Component {
  
//    with arrow function binding this
    // increaseQuantity = () => {                  
        
    //     //setstate form 1
    //     // this.setState({
    //     //   qty:this.state.qty + 1
    //     // })
    //     //setstate form 2------ if prevState is required then use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     },() => {
    //         console.log('this.state', this.state);
    //     })
    // }

    // decreaseQuantity = () => {
    //     // console.log('this.state',this.state);
    //     const {qty} =this.state;
    //     if(qty === 0){
    //         return;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //         // set state is asynchronus therefore we use callback function
    //     },() => {
    //         console.log('this.state', this.state);
    //     })
    // }
    //In promise or ajax  set state do synchronus call  ---updated to synchronus

    render() {
        // console.log('this.props',this.props)
        const {price,title,qty} = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onhandleDeleteProduct} = this.props
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontsize:25}}>    {title} </div>
                    <div style={ {color: '#777'}}>Rs {price} </div>
                    <div style={ {color: '#777'}}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                      {/* buttons */}
                      <img alt="increase"
                       className="action-icons" 
                       src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                       onClick={ () => onIncreaseQuantity(product) }
                       />
                      <img alt="decrease" 
                      className="action-icons"
                      src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    //   onClick={ () => this.props.onDecreaseQuantity(this.props.product) }
                      onClick={ () => onDecreaseQuantity(product) }
                      />
                      <img alt="delete" 
                        className="action-icons"
                     src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"
                     onClick={() => {onhandleDeleteProduct(product.id)}}
                     />
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