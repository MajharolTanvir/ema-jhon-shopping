import React, { useEffect, useState } from 'react';
import '../../fakeData/products.json'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-8 col-md-10 col-xl-10 p-0">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-4 justify-content-center mt-4 mx-0'>
                        {
                            products.map(product => <Product
                                product={product}
                                key={product.id}
                                addToCart={addToCart}>
                            </Product>)
                        }
                    </div>
                </div>
                <div className="col-4 col-md-2 col-xl-2 order">
                    <h5 className='my-4 text-center'>Order summery</h5>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;