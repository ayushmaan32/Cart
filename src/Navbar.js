// import { buildQueries } from "@testing-library/react";
import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img  style={styles.cartImage}
                 src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cart-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}
const styles = {
    cartImage: {
        height: 25,
        marginRight : 20

    },
    nav: {
        height:50,
        border: '1 solid blue',
        background:'#4267b3',
        display: 'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cartIconContainer: {
        position:'relative',
          
    },
    cartCount: {
        background:'yellow',
        padding:'2px 8px',
        borderRadius: '50%',
        position:'absolute',
        right:0,
        top:-9

        

    }
}

export default Navbar;