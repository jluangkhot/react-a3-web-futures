// Carousel.js

import React, { useState } from 'react';
import '../styles/styles.css'; // Make sure to import your CSS file

const Carousel = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div className="carousel">
            
                
                <div className={`carousel__item ${selectedItem === 0 ? 'carousel__item--selected' : ''}`}>
                    <div className="carousel__text">
                        <h2>Our Matcha Series</h2>
                        <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
                        <a href="shop.html?category=matcha" onClick={(e) => { e.preventDefault(); handleItemClick(0); }}>Shop</a>
                    </div>
                    <img src="/matcha-co-pC16vUGYCL4-unsplash.jpg" alt="matcha" />
                </div>

                <div className={`carousel__item ${selectedItem === 1 ? 'carousel__item--selected' : ''}`}>
                    <div className="carousel__text">
                        <h2>How To Make Matcha</h2>
                        <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
                        <a href="shop.html?category=matcha" onClick={(e) => { e.preventDefault(); handleItemClick(0); }}>Shop</a>
                    </div>
                    <img src="/jason-leung-f3uWanPu_rU-unsplash.jpg" alt="matcha" />
                </div>

                <div className={`carousel__item ${selectedItem === 2 ? 'carousel__item--selected' : ''}`}>
                    <div className="carousel__text">
                        <h2>Our Story</h2>
                        <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
                        <a href="shop.html?category=matcha" onClick={(e) => { e.preventDefault(); handleItemClick(0); }}>Shop</a>
                    </div>
                    <img src="/bala-karthikeya-pavan-guda-rfObRW_1YXE-unsplash.jpg" />
              
                
            </div>
            <div className="carousel__nav">
            <span className={`carousel__button ${selectedItem === 0 ? 'carousel__button--selected' : ''}`} onClick={() => handleItemClick(0)}></span>
                <span className={`carousel__button ${selectedItem === 1 ? 'carousel__button--selected' : ''}`} onClick={() => handleItemClick(1)}></span>
                <span className={`carousel__button ${selectedItem === 2 ? 'carousel__button--selected' : ''}`} onClick={() => handleItemClick(2)}></span>
            </div>
        </div>
    );
};

export default Carousel;
