import React, { useEffect, useState } from 'react';
import { addToDb, getData } from '../../utilities/utilities';
import Cart from '../Cart/Cart';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    useEffect(() => {
        const storedArea = getData();
        let savedArea = []
        for (const area in storedArea) {
            const addedArea = countries.find(country => country.area == area);

            if (addedArea) {
                savedArea.push(addedArea)
            }
        }
        setCart(savedArea)
    }, [countries])

    const handleAddToCart = country => {
        // console.log('clicked', country)
        const newCart = [...cart, country];
        setCart(newCart)
        addToDb(country.area)
    }
    return (
        <div className='main-container'>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        handleAddToCart={handleAddToCart}
                    ></Country>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                >
                </Cart>
            </div>
        </div>
    );
};

export default Countries;