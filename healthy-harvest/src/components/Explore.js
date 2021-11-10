import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './explore.css'
import { BrowserRouter as Router } from 'react-router-dom'

function Explore() {
    return (
        <Router>
            <Header/>
            <h1 class="heading"> Products </h1>

<section class="course">

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Rice.jpg" alt=""/>
        <h3>Rice</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Ragi.jpg" alt=""/>
        <h3>Ragi</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Corn Flour.jpg" alt=""/>
        <h3>Corn Flour</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Barley.jpg" alt=""/>
        <h3>Barley</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Brown Rice.jpg" alt=""/>
        <h3>Brown Rice</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

    <div class="box">
        <span class="amount">Rs.299</span>
        <img src="./assets/imgs/Wheat.jpg" alt=""/>
        <h3>Wheat</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam omnis odit accusamus doloremque? Cum aliquid unde nulla. Vitae, adipisci?</p>
        <a href="#" class="btn">Buy</a>
    </div>

</section>

<Footer/>
        </Router>
    )
}

export default Explore
