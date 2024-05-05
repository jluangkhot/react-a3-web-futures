import React from 'react';
import './style.css'

const Carousel = () => {

  window.onload = function() {
    document.querySelectorAll(".carousel").forEach(carousel => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
      });

      carousel.insertAdjacentHTML("beforeend",`
      <div class="carousel__nav">
          ${ buttonsHtml.join("") }
      `);

      const buttons = carousel.querySelectorAll(".carousel__button");

      buttons.forEach((button, i) => {
          button.addEventListener("click", () => {
              items.forEach (item => item.classList.remove("carousel__item--selected"));
              buttons.forEach(button => button.classList.remove("carousel__button--selected" ));

              items[i].classList.add("carousel__item--selected");
              button.classList.add("carousel__button--selected");
          });

      });

      items[0].classList.add("carousel__item--selected");
      buttons[0].classList.add("carousel__button--selected");
    });
  }

  return (
    <div className="carousel">
      <div className="carousel__item">
        <div className="carousel__text">
          <h2>Our Matcha Series</h2>
          <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
          <a href="shop.html?category=matcha">Shop</a>
        </div>
        <img src="/matcha-co-pC16vUGYCL4-unsplash.jpg" alt="Matcha Powder" />
      </div>
      <div className="carousel__item">
        <div className="carousel__text">
          <h2>How to Make Matcha</h2>
          <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
          <a href="shop.html">Read More</a>
        </div>
        <img src="/jason-leung-f3uWanPu_rU-unsplash.jpg" alt="Making Matcha" />
      </div>
      <div className="carousel__item">
        <div className="carousel__text">
          <h2>Our Story</h2>
          <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
          <a href="about.html">Read More</a>
        </div>
        <img src="/bala-karthikeya-pavan-guda-rfObRW_1YXE-unsplash.jpg" alt="Green Tea Farm" />
      </div>
    </div>
  );
};

export default Carousel;
