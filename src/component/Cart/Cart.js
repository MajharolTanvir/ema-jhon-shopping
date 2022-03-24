import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = Math.round(total + shipping + tax);
    return (
        <div>
            <div>
                <p>Selected items:{quantity}</p>
                console.log(quantity);
                <p>Total price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: $ {grandTotal}</h5>
            </div>
            <div>
                <button className='w-100 bg-danger border-0 py-2 text-white rounded-3 my-3'>Clean cart</button>
                <button className='w-100 bg-warning border-0 py-2 text-white rounded-3 my-3'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;