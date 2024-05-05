import React from 'react';
import './style.css';
function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="index.html"><img src="/uji.png" id="uji-logo" alt="Logo" /></a>
                    <h1>Uji Creative</h1>
                </div>
                
                <ul className="nav-links">
                    <li><a href="shop.html?category=all">Shop</a>
                        <ul className="dropdown">
                            <li><a href="shop.html?category=matcha">Matcha Series</a></li>
                            <li><a href="shop.html?category=hojicha">Hojicha Series</a></li>
                            <li><a href="shop.html?category=tea-accessories">Tea Accessories</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                
                <div className="box">
                    <input type="text" placeholder="Search" />
                    <a href="#search" className="search-icon">
                        <img src="/search.svg" alt="Search Icon" />
                    </a>
                </div>
                <a href="#cart" className="cart-icon">
                    <img src="/cart.svg" alt="Shopping Cart" />
                </a>
            </nav>
        </header>
    );
}

export default Header;
