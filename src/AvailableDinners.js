import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Jumbotron
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import CreateDinner from './CreateDinner'

class AvailableDinners extends Component {
    state = {
        dinners: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/dinners`
        ).then(res => {
                console.log(res)
            }
        )
    }

    printDinners = () => {

    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                        attention to featured content or information.</p>
                    <hr className="my-2"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <p className="lead">
                        <Button onClick={this.componentDidMount} color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    };

}

export default AvailableDinners;