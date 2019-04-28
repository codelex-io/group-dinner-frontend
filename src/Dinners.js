import React, {Component} from 'react';
import {Button, Container, Form,} from 'reactstrap';
import './App.css';
import AvailableDinners from './AvailableDinners'
import Row from 'reactstrap/es/Row'
import {Link} from 'react-router-dom'
import Col from 'reactstrap/es/Col'
import Quotes from './Quotes'

class Dinners extends Component {
    render() {
        return (
            <Container className="App">
                <Container>
                    <Row>
                        <Col style={{padding: '7% 5%', textAlign: 'left', verticalAlign: 'center'}}>
                            <Row>
                                <Col>
                                    <h2 style={{color: 'white', fontSize: '36px'}}>Group Dinner</h2>
                                </Col>
                                <Col>
                                    <Form className="Dinners">
                                        <Button color="light" tag={Link} to="/create-dinner">
                                            Create dinner
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Quotes/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="5">
                            <AvailableDinners/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }

}

export default Dinners;