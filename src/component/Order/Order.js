import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../ReviewItem/Review';

const Order = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products)

    const removeProduct = review => {
        const rest = cart.filter(product => product.id !== review.id)
        setCart(rest);
        removeFromDb(review.id)
    }
    return (
        <div className='row container mx-auto mt-5'>
            <div className='col-xl-8 col-md-8 col-lg-8 col-sm-12'>
                {
                    cart.map(review => <Review key={review.id} review={review} remove={removeProduct} />)
                }
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 bg-info p-4'>
                <h4>Order summery</h4>
                <Cart cart={cart}><Link to='/inventory'>Proceed checkout</Link></Cart>
            </div>
        </div>
    );
};

export default Order;