import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="card m-2 p-2  product">
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: ${price}</p>
                <div className="card-small-body mt-2">
                    <p className='m-0'><small>Seller: {seller}</small></p>
                    <p className='m-0'><small>Ratings: {ratings}</small></p>
                </div>
            </div>
            <div className="card-footer p-0">
                <button onClick={addToCart} className='w-100 border-0 py-2'>Add to cart<FontAwesomeIcon className='ps-2' icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;