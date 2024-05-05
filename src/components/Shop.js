import React, { useState, useEffect } from 'react';
import Header from './Header';


function Shop() {
    return (
        <div>
      <div class="shop-header-container">
        <h2>Uji Shop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
    </div>

    <div class="categories-bar">
        <ul class="categories">
            <li><a href="#" >All</a></li>
            <li><a href="#" >Matcha Series</a></li>
            <li><a href="#" >Hojicha Series</a></li>
            <li><a href="#" >Tea Accessories</a></li>
           
        </ul>
    </div>

    <div class="container">
        <div class="product-grid">
            <div class="product" data-category="matcha"> 
                <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 1"/>
                <h3>Uji Matcha A Grade 1</h3>
                <p>$10.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Matcha A Grade 1', 10)">Add to Cart</button>
            </div>
            <div class="product" data-category="matcha">
                <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 2"/>
                <h3>Uji Matcha A Grade 2</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Matcha A Grade 2', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="matcha">
                <img src="/mockupbee-ghsa1586bVU-unsplash.jpg" alt="Uji Matcha A Grade 3"/>
                <h3>Uji Matcha A Grade 3</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Matcha A Grade 3', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="hojicha">
                <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 1"/>
                <h3>Uji Hojicha 1</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Hojicha 1', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="hojicha">
                <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 2"/>
                <h3>Uji Hojicha 2</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Hojicha 2', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="hojicha">
                <img src="/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg" alt="Uji Hojicha 3"/>
                <h3>Uji Hojicha 3</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Uji Hojicha 3', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="tea-accessories">
                <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 1"/>
                <h3>Tea Gift Set 1</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Tea Gift Set 1', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="tea-accessories">
                <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 2"/>
                <h3>Tea Gift Set 2</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Tea Gift Set 2', 15)">Add to Cart</button>
            </div>
            <div class="product" data-category="tea-accessories">
                <img src="/mildlee-8N6z4yXUkwY-unsplash.jpg" alt="Tea Gift Set 3"/>
                <h3>Tea Gift Set 3</h3>
                <p>$15.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <button type="button" class="atc-button" onclick="addToCart('Tea Gift Set 3', 15)">Add to Cart</button>
            </div>
            
        </div>

       
    </div>

    <div class="sidebar" id="sidebar">
        <button onclick="toggleSidebar()">Close</button>
        <h2>Shopping Cart</h2>
        <ul id="cart-items" class="cart-items">
           
        </ul>
        <p id="cart-total" class="cart-total">Total: $0.00</p> 
        
    </div>
    </div>
    );
}

export default Shop;

