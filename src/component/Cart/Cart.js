import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <div>
                <p>Selected items:{props.cart.length}</p>
                <p>Total price: ${ }</p>
                <p>Total Shipping Charge: ${ }</p>
                <p>Tax: ${ }</p>
                <h5>Grand Total: $ { }</h5>
            </div>
            <div>
                <button className='w-100 bg-danger border-0 py-2 text-white rounded-3 my-3'>Clean cart</button>
                <button className='w-100 bg-warning border-0 py-2 text-white rounded-3 my-3'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;