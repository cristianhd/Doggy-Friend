import React from 'react';
import Footer from '../Home/Footer';
import Home from '../Home/Home';
import Nav from '../Home/Nav';
import { Route, Switch } from 'react-router-dom'
import Form from '../Home/Add/Form';
import Details from '../Home/Details/Details';
import LandingPage from '../../Components/App/LandingPage.js'
import { Container } from './AppStyled';


function App(props) {
    return (
        <Container>
            <Nav/>
            <Switch>
            <Route exact path="/" component={LandingPage} />
                <Route exact path = "/home" component={Home}></Route>
                <Route exact path = "/home/add" component={Form}></Route>
                <Route exact path = "/home/details/:id/:temperaments" component = {Details} ></Route>
            </Switch>
            <Footer/>
        </Container>
    );
}

export default App;