import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label,} from 'reactstrap';
import './App.css';
import axios from 'axios'


class LeaveFeedback extends Component {
    onFeedbackUpdate = feedback => {
        this.setState({feedback: feedback})
    }

    onSubmit = () => {
        const {feedback} = this.state
        axios.post(
            `/api/feedback`, {
                feedback
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
            }
        )
    }

    render() {
        return (
            <Container className="App">
                <h2>Feedback</h2>
                <Form className="LeaveFeedback">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                name="feedback"
                                id="feedback"
                                placeholder="Your feedback"
                                onChange={e => this.onFeedbackUpdate(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={this.onSubmit}>
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default LeaveFeedback;