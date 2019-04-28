import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label,} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import Row from 'reactstrap/es/Row'

class Feedback extends Component {
    state = {
        id: 1,
        feedback: true,
        isLoading: false,
        receiver: {
            firstName: "aaa",
            lastName: "bbb"
        }
    }
    onTitleUpdate = feedback => {
        this.setState({feedback: feedback})
    }

    onSubmit = () => {
        const {feedback} = this.state
        axios.post(
            "/api/dinners/" + this.state.id + "/feedback",
            {
                feedback
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
                this.goTo("/dinners")
            }
        )
    }

    goTo = (link) => {
        history.push(link)
    }

    isValid = () => {
        const {feedback} = this.state
        if (!feedback || feedback.length === 0) {
            return false
        }
        return true
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className="Feedback">
                <div className="App">
                    <h2>Leave feedback for {this.state.receiver.firstName} {this.state.receiver.lastName}</h2>
                    <Form className="form">
                        <FormGroup>
                            <Label>Feedback</Label>
                            <Input
                                type="radio"
                                name="feedback"
                                id="feedback"
                                placeholder="Feedback"
                                onChange={e => this.onTitleUpdate(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Row}>
                            <Label as="legend" column sm={2}>
                                Radios
                            </Label>
                            
                        </FormGroup>
                        <Row>
                            <Col>
                                <Button disabled={!this.isValid()} color="primary" onClick={this.onSubmit}>
                                    {isLoading ? 'Loading' : 'Leave feedback'}
                                </Button>
                                <span>&nbsp;&nbsp;</span>
                                <a href="/" style={{color: 'white'}}>
                                    Cancel
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        );
    }
}

export default Feedback;