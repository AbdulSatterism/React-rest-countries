import React from 'react';
import './Cart.css';


const Cart = ({ cart }) => {
    // console.log(cart)
    let totalArea = 0;
    for (const country of cart) {
        totalArea = totalArea + country.area;
        // console.log(country.area)
    }
    return (
        <div className='cart'>
            <h4>Total Area: {totalArea}</h4>
        </div>
    );
};

export default Cart;