import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './App.css';
import axios from 'axios'


class LeaveFeedback extends Component {
    onFeedbackUpdate = feedback => {
        this.setState({feedback: feedback})
    }

    onSubmit = () => {
        const {feedback} = this.state
        axios.post(
            `http://localhost:8080/api/feedback`, {
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