import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [productCount, setProductCount] = useState(10)
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&productCount=${productCount}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, productCount])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / productCount);
                setPageCount(pages)
            })
    }, [productCount])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product._id === selectedProduct._id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart)
        addToDb(selectedProduct._id);
    }

    return (
        <div>
            <div className="row m-0">
                <div className="col-8 col-md-10 col-xl-10 p-0">
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-4 justify-content-center mt-5 mx-0'>
                        {
                            products.map(product => <Product
                                product={product}
                                key={product._id}
                                addToCart={addToCart}>
                            </Product>)
                        }
                    </div>
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number => <Button className={page === number ? 'mx-1 my-4 selected' : 'mx-1 my-4'}
                                onClick={() => setPage(number)}
                            >{number}</Button>)
                        }
                        <select className='my-4' onChange={e => setProductCount(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <div className="col-4 col-md-2 col-xl-2 order">
                    <h5 className='my-4 text-center'>Order summery</h5>
                    <Cart cart={cart}>Review Order</Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;