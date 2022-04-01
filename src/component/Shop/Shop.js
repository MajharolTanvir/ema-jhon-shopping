import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart)
        addToDb(selectedProduct.id);
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-8 col-md-10 col-xl-10 p-0">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-4 justify-content-center mt-5 mx-0'>
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