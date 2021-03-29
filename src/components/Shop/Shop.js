import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import loading from '../../images/loading.gif';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('https://powerful-reaches-25389.herokuapp.com/products')
        .then(res => res.json())
        .then (data => setProduct(data))
    }, [])

    document.title = "Shop More";

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        fetch('https://powerful-reaches-25389.herokuapp.com/productByKeys', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.length === 0 && <p>Loading ...........</p>
                }                
                <ul>
                    {
                        products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} showAddToCart={true} key={products.key}>
                        </Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;