import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Review from '../ReviewItem/Review';

const Order = () => {
    const [products] = useProducts();
    const [cart] = useCart(products)
    return (
        <div className='row container mx-auto mt-5'>
            <div className='col-xl-8 col-md-8 col-lg-8 col-sm-12'>
                {
                    cart.map(review => <Review key={review.id} review={review} />)
                }
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
                <h4>Order summery</h4>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Order;