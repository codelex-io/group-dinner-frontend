import React, {Component} from 'react'
import Navbar from 'reactstrap/es/Navbar'
import Container from 'reactstrap/es/Container'
import Nav from 'reactstrap/es/Nav'
import NavLink from 'reactstrap/es/NavLink'
import './App.css';
import axios from 'axios'
import history from './history'

class Header extends Component {
    
    LogOut = () => {
        axios.post(
            "/api/log-out"
        ).then(response => {
                console.log(response.data)
                this.goTo("/register")
            }
        )
    }

    goTo = (link) => {
        history.push(link)
    }

    render() {
        return (
            <Navbar expand="md" color="dark" sticky="top">
                <Container>
                    <Nav className="mr-auto">
                        <NavLink href="/create-dinner" style={{color: 'white'}}>Create Dinner</NavLink>
                        <NavLink href="/dinners" style={{color: 'white'}}>Discover</NavLink>
                        <NavLink href="/register" style={{color: 'white'}} onClick={this.LogOut()}>Log
                            Out</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;