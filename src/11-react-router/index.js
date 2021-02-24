// import React from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Person from "./Person"
import Error from "./Error"
import People from "./People"
import NavBar from "./Navbar"
import Navbar from "./Navbar"

const Index = () => {
    return <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/people">
                <People />
            </Route>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
    </Router>
}

export default Index


// The exact property helps to avoid rendering of all components. Only the ones specified in the URL will be displayed. 
// Switch renders a route exclusively.