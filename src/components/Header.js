import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav>
                <div className="logo">
                    <NavLink to="/home">
                        <img src="/uji.png" id="uji-logo" alt="Logo"/>
                    </NavLink>
                    <h1>Uji Creative</h1>
                </div>
                
                <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                    <div className="hamburger"></div>
                </div>
                
                <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                        <ul className="dropdown">
                            <li><NavLink to="/shop?category=matcha">Matcha Series</NavLink></li>
                            <li><NavLink to="/shop?category=hojicha">Hojicha Series</NavLink></li>
                            <li><NavLink to="/shop?category=tea-accessories">Tea Accessories</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                
                <div className="box">
                    <input type="text" placeholder="Search" />
                    <a href="#search" className="search-icon">
                        <img src="/search.svg" alt="Search Icon" />
                    </a>
                </div>
                <NavLink to="/cart" className="cart-icon">
                    <img src="/cart.svg" alt="Shopping Cart" />
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
