# Self Evaluation and Reflection


This assessment required us to build a website and incorporate ‘future web technology’ concepts such as AI generated code, the use of CMS, frameworks and libraries. 
For this project, I decided to create an ecommerce type website with functions like adding to cart .filtering products, displaying cart total and carousels.

```
<div class="categories-bar">
                <ul class="categories">
                    <li><a href="#" onClick={() => filterProducts('all')} className={selectedCategory === 'all' ? 'active' : ''}>All</a></li>
                    <li><a href="#" onClick={() => filterProducts('matcha')} className={selectedCategory === 'matcha' ? 'active' : ''}>Matcha Series</a></li>
                    <li><a href="#" onClick={() => filterProducts('hojicha')} className={selectedCategory === 'hojicha' ? 'active' : ''}>Hojicha Series</a></li>
                    <li><a href="#" onClick={() => filterProducts('tea-accessories')} className={selectedCategory === 'tea-accessories' ? 'active' : ''}>Tea Accessories</a></li>
                </ul>
            </div>

```
In this code sample, a list of categories is displayed and has connected link. Every link has a corresponding ‘onClick’ event handler that, when clicked, calls the ‘filterProducts’ function. This function then returns with the relevant category. The active category is linked with CSS class of ‘active’ and to identify what category is active, ‘selectedCategory’ is utilised.



```
div className="carousel">
            
                
                <div className={`carousel__item ${selectedItem === 0 ? 'carousel__item--selected' : ''}`}>
                    <div className="carousel__text">
                        <h2>Our Matcha Series</h2>
                        <h3>Explore our exquisite range of matcha, curated to elevate your tea experience with unparalleled flavor and quality.</h3>
                        <Link to="/shop?category=matcha" >Shop</Link>
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
```
This code showcases a carousel of images. Every item on the carousel includes a title, a description and an image related to its link. The current selected item is identified by the ‘selectedItem’ state, and a CSS class of ‘display: block;’ is added to show the selected item.


I utilised React.js because it has become an industry standard for front-end web development, and creating a project with it would broaden my knowledge and skillset. As generative AI is becoming more intelligent and mainstream, we can use it to our advantage in coding front-end websites to assist writing long and tedious code. Generative AI can also be extremely useful when troubleshooting any issues as all solutions are presented in one place.

The biggest challenge of this project was learning the structure of the React DOM. I initially built my website in pure HTML, CSS, and JavaScript to allow myself creative freedom if I wanted to implement extra functions and features as I am more comfortable working with pure code.
I then created a React project and imported my code into it, only in the final stages of developing my website. This evidently came with several obstacles as I had to adjust the JavaScript and HTML into JSX and divide my code into different components. I utilised ChatGPT to assist with any issues but even that came with its own difficulties. While being very useful when asking to generate code, it was challenging to convey exactly what outcome or result I wanted from ChatGPT. It often got confused and repeated the same code or generated code with incorrect terms and functions. Unfortunately, I was unable to finish implementing my code and didn’t get to display the shopping cart and cart totals.

This project taught me that I should familiarize myself with JavaScript more before learning how to create complicated components in React.js. It also taught me that Chat GPT isn’t fool proof and how useful JavaScript libraries can be when needing to reuse any repeatable code.

