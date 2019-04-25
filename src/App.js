import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Register from './Register'
import SignIn from './SignIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'
import DinnerPage from './DinnerPage'
import history from './history'
import Navbar from 'reactstrap/es/Navbar'
import NavbarBrand from 'reactstrap/es/NavbarBrand'
import Nav from 'reactstrap/es/Nav'
import NavLink from 'reactstrap/es/NavLink'
import Container from 'reactstrap/es/Container'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Navbar expand="md" color="dark" sticky="top">
                    <Container>
                        <NavbarBrand href="/dinners" style={{color: 'white'}}>Home</NavbarBrand>
                        <Nav className="mr-auto" >
                            <NavLink href="/create-dinner" style={{color: 'white'}}>Create Dinner</NavLink>
                            <NavLink href="/dinners" style={{color: 'white'}}>Discover</NavLink>
                            <NavLink href="/sign-out" style={{color: 'white'}}>Sign Out</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <div style={{
                    backgroundColor: 'rgba(1,1,1,0.5)',
                    color: 'white',
                    margin: '3% 5%',
                    padding: '20px 50px',
                    fontFamily: 'Trebuchet MS'
                }}>

                    <Switch>
                        <Route path="/sign-in" component={SignIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/create-dinner" component={CreateDinner}/>
                        <Route path="/dinners/:id" component={DinnerPage}/>
                        <Route path="/dinners" component={Dinners}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;