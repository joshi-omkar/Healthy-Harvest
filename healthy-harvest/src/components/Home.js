import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div>
            <div class="hero">
        <div class="hero-content">
            <div class="h-content-left">
                <p><br>Our Mother Culture</br></p>
                <li class="title">Nature is Love , so as Agriculture</li>
                <button id="explore-btn" class="btn">Explore</button>
            </div>
        </div>
    </div>

    <div class="sell">
        <div class="sellers">
            <div class="sell-buyers">
                <div id="carousal-one" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./assets/imgs/company1.jpg" class="d-block sizeit" alt="..."></img>
                            <div class="buyers-info">
                                <li><span class="boldit">Name :</span> Lorem Ipsum</li>
                                <li><span class="boldit">Address :</span> Maharashtra, India</li>
                                <li><span class="boldit">Crops:</span> Rice, Daal, Wheat, Chana</li>
                                <li class="red">For Pricing Contact the Buyer</li>
                                <Link to="#">Call</Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/imgs/company1.jpg" class="d-block sizeit" alt="..."></img>
                            <div class="buyers-info">
                                <li><span class="boldit">Name :</span> Lorem Ipsum</li>
                                <li><span class="boldit">Address :</span> Maharashtra, India</li>
                                <li><span class="boldit">Crops:</span> Rice, Daal, Wheat, Chana</li>
                                <li class="red">For Pricing Contact the Buyer</li>
                                <Link to="#">Call</Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/imgs/company1.jpg" class="d-block sizeit" alt="..."></img>
                            <div class="buyers-info">
                                <li><span class="boldit">Name :</span> Lorem Ipsum</li>
                                <li><span class="boldit">Address :</span> Maharashtra, India</li>
                                <li><span class="boldit">Crops:</span> Rice, Daal, Wheat, Chana</li>
                                <li class="red">For Pricing Contact the Buyer</li>
                                <Link to="#">Call</Link>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousal-one"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousal-one"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="sell-companies">
                <div id="carousel-two" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./assets/imgs/company.png" class="d-block sizeit" alt="..."></img>
                            <div class="company-info">
                                <h5>Lorem Ipsum, pvt limited.</h5>
                                <li><span class="boldit">Location :</span> Maharashtra, India</li>
                                <Link to="#">Sell</Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/imgs/company.png" class="d-block sizeit" alt="..."></img>
                            <div class="company-info">
                                <h5>Lorem Ipsum, pvt limited.</h5>
                                <li><span class="boldit">Location :</span> Maharashtra, India</li>
                                <Link to="#">Sell</Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/imgs/company.png" class="d-block sizeit" alt="..."></img>
                            <div class="company-info">
                                <h5>Lorem Ipsum, pvt limited.</h5>
                                <li><span class="boldit">Location :</span> Maharashtra, India</li>
                                <Link to="#">Sell</Link>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-two"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-two"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
       
    </div>



    <div class="Schemes">
        <ul class="cards1">
            <li class="cards1__item">
                <div class="card1">
                    <div class="card1__image scheme1"></div>
                    <div class="card1__content">
                        <img src="https://ruralmarketing.in/wp-content/uploads/2020/12/11-Most-important-government-schemes-in-agriculture-sector.jpg"
                            class="d-block sizeit" alt="..."></img>
                        <div class="card1__title">Scheme 1</div>
                        <p class="card1__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard </p>
                        <button class="btn btn--block card__btn">Know More</button>
                    </div>
                </div>
            </li>
            <li class="cards1__item">
                <div class="card1">
                    <div class="card1__image scheme2"></div>
                    <div class="card1__content">
                        <img src="https://images.unsplash.com/photo-1540736086231-18770daec04e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsJTIwZmFybWVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="d-block sizeit" alt="..."></img>
                        <div class="card1__title">Scheme 2</div>
                        <p class="card1__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard </p>
                        <button class="btn btn--block card__btn">Know More</button>
                    </div>
                </div>
            </li>
            <li class="cards1__item">
                <div class="card1">
                    <div class="card1__image scheme3"></div>
                    <div class="card1__content">
                        <img src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="d-block sizeit" alt="..."></img>
                        <div class="card1__title">Scheme 3</div>
                        <p class="card1__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard </p>
                        <button class="btn btn--block card__btn">Know More</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>


    <div class="info">
        <div class="cards">
            <div class="card card-1">
                <div class="card-img">
                    <img src="./assets/imgs/sack of rice.png" alt="rice"></img>
                </div>
                <div class="card-content">
                    <h3>Rice</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora quas distinctio sed
                        libero! Sapiente harum eos facilis sint esse alias officia. Ea, error animi iure corporis
                        numquam vero veritatis.</p>
                </div>
            </div>
            <div class="card card-2">
                <div class="card-img">
                    <img src="./assets/imgs/sack of rice.png" alt="rice"></img>
                </div>
                <div class="card-content">
                    <h3>Rice</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora quas distinctio sed
                        libero! Sapiente harum eos facilis sint esse alias officia. Ea, error animi iure corporis
                        numquam vero veritatis.</p>
                </div>
            </div>
            <div class="card card-3">
                <div class="card-img">
                    <img src="./assets/imgs/sack of rice.png" alt="rice"></img>
                </div>
                <div class="card-content">
                    <h3>Rice</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempora quas distinctio sed
                        libero! Sapiente harum eos facilis sint esse alias officia. Ea, error animi iure corporis
                        numquam vero veritatis.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="products">
        <div class="product">
            <div class="pro-top">
                <div class="product-card">
                    <div class="pro-img">
                        <img src="./assets/imgs/product.png" alt=""></img>
                    </div>
                    <div class="pro-content">
                        <h3>Fertilizer</h3>
                        <p>
                            Price : 100₹/100ml
                            <Link to="#">More</Link>
                        </p>

                    </div>
                </div>
                <div class="product-card">
                    <div class="pro-img">
                        <img src="./assets/imgs/product.png" alt=""></img>
                    </div>
                    <div class="pro-content">
                        <h3>Fertilizer</h3>
                        <p>
                            Price : 100₹/100ml
                            <Link to="#">More</Link>
                        </p>

                    </div>
                </div>
                <div class="product-card">
                    <div class="pro-img">
                        <img src="./assets/imgs/product.png" alt=""></img>
                    </div>
                    <div class="pro-content">
                        <h3>Fertilizer</h3>
                        <p>
                            Price : 100₹/100ml
                            <Link to="#">More</Link>
                        </p>

                    </div>
                </div>
                <div class="product-card">
                    <div class="pro-img">
                        <img src="./assets/imgs/product.png" alt=""></img>
                    </div>
                    <div class="pro-content">
                        <h3>Fertilizer</h3>
                        <p>
                            Price : 100₹/100ml
                            <Link to="#">More</Link>
                        </p>

                    </div>
                </div>
                <div class="product-card">
                    <div class="pro-img">
                        <img src="./assets/imgs/product.png" alt=""></img>
                    </div>
                    <div class="pro-content">
                        <h3>Fertilizer</h3>
                        <p>
                            Price : 100₹/100ml
                            <Link to="#">More</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Home
