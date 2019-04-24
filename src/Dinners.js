import React, {Component} from 'react';
import {Button, Container, Form,} from 'reactstrap';
import './App.css';
import {Link} from 'react-router-dom'
import AvailableDinners from './AvailableDinners'

class Dinners extends Component {
    
    render() {
        return (
            <Container className="App">
                <h2>Group Dinner</h2>
                <Form className="Dinners">
                    <Button color="primary" tag={Link} to="/create-dinner"> Create dinner
                    </Button>
                </Form>
                <AvailableDinners/>
            </Container>
        );
    }

}

export default Dinners;