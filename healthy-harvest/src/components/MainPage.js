import React from 'react'
import Home from './components/Home'
import Explore from './components/Explore'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function MainPage() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Home}/>
                <Route path="/explore" exact component={Explore}/>
            </Routes>
        </Router>
    )
}

export default MainPage
