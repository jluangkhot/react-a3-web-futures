import React, { useState, useEffect } from 'react';
import '../styles/styles.css'; // Make sure to import your CSS file

function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            setSelectedCategory(category);
        }
    }, []);

    const filterProducts = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div class="shop-header-container">
                <h2>Uji Shop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
            </div>

            <div class="categories-bar">
                <ul class="categories">
                    <li><a href="#" onClick={() => filterProducts('all')} className={selectedCategory === 'all' ? 'active' : ''}>All</a></li>
                    <li><a href="#" onClick={() => filterProducts('matcha')} className={selectedCategory === 'matcha' ? 'active' : ''}>Matcha Series</a></li>
                    <li><a href="#" onClick={() => filterProducts('hojicha')} className={selectedCategory === 'hojicha' ? 'active' : ''}>Hojicha Series</a></li>
                    <li><a href="#" onClick={() => filterProducts('tea-accessories')} className={selectedCategory === 'tea-accessories' ? 'active' : ''}>Tea Accessories</a></li>
                </ul>
            </div>

            <div class="container">
                <div class="product-grid">
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'matcha' ? 'show' : 'hide'}`} data-category="matcha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'matcha') ? 'block' : 'none' }}>
                        <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 1"/>
                        <h3>Uji Matcha A Grade 1</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" onClic>Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'matcha' ? 'show' : 'hide'}`} data-category="matcha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'matcha') ? 'block' : 'none' }}>
                        <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 2"/>
                        <h3>Uji Matcha A Grade 2</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" onClic>Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'matcha' ? 'show' : 'hide'}`} data-category="matcha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'matcha') ? 'block' : 'none' }}>
                        <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 3"/>
                        <h3>Uji Matcha A Grade 3</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" onClic>Add to Cart</button>
                    </div>
                

               
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'hojicha' ? 'show' : 'hide'}`} data-category="hojicha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'hojicha') ? 'block' : 'none' }}>
                        <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 1"/>
                        <h3>Uji Hojicha 1</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button">Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'hojicha' ? 'show' : 'hide'}`} data-category="hojicha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'hojicha') ? 'block' : 'none' }}>
                        <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 2"/>
                        <h3>Uji Hojicha 2</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button">Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'hojicha' ? 'show' : 'hide'}`} data-category="hojicha" style={{ display: (selectedCategory === 'all' || selectedCategory === 'hojicha') ? 'block' : 'none' }}>
                        <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 3"/>
                        <h3>Uji Hojicha 3</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" >Add to Cart</button>{/*onClick={() => addToCart('Uji Hojicha 3', 10)}*/}
                    </div>


                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'tea-accessories' ? 'show' : 'hide'}`} data-category="tea-accessories" style={{ display: (selectedCategory === 'all' || selectedCategory === 'tea-accessories') ? 'block' : 'none' }}>
                        <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 1"/>
                        <h3>Tea Gift Set 1</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" >Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'tea-accessories' ? 'show' : 'hide'}`} data-category="tea-accessories" style={{ display: (selectedCategory === 'all' || selectedCategory === 'tea-accessories') ? 'block' : 'none' }}>
                        <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 2"/>
                        <h3>Tea Gift Set 2</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" >Add to Cart</button>
                    </div>
                    <div className={`product ${selectedCategory === 'all' || selectedCategory === 'tea-accessories' ? 'show' : 'hide'}`} data-category="tea-accessories" style={{ display: (selectedCategory === 'all' || selectedCategory === 'tea-accessories') ? 'block' : 'none' }}>
                        <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 3"/>
                        <h3>Tea Gift Set 3</h3>
                        <p>$10.00</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button type="button" className="atc-button" >Add to Cart</button>{/*onClick={() => addToCart('Uji Hojicha 3', 10)}*/}
                    </div>
                </div>

            </div>
                    {/* Repeat similar structure for other product items

            <div class="sidebar" id="sidebar">
                <button onclick="toggleSidebar()">Close</button>
                <h2>Shopping Cart</h2>
                <ul id="cart-items" class="cart-items">
                    {/* Cart items
                </ul>
                <p id="cart-total" class="cart-total">Total: $0.00</p> 
            </div> */}
        </div>
       
    );
}

export default Shop
