import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Button
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        isLoading: false
    }
    onEmailUpdate = email => {
        this.setState({email: email})
    }
    onPasswordUpdate = password => {
        this.setState({password: password})
    }

    onSubmit = () => {
        axios.post(
            `http://localhost:8080/api/sign-in`,
            {email: this.state.email, password: this.state.password}
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
            }
        )
    }
    isValid = () => {
        const {email, password} = this.state
        if (!email || email.length === 0) {
            return false
        }
        if (!password || password.length === 0) {
            return false
        }
        return true

    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className="SignIn">
                <h2>Sign in</h2>
                <Form className="form" novalidate>
                    <Col>
                        <FormGroup>
                            <Label>Email*</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                required
                                onChange={e => this.onEmailUpdate(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="psw">Password*</Label>
                            <Input
                                type="password"
                                id="psw"
                                placeholder="********"
                                required
                                onChange={e => this.onPasswordUpdate(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Button disabled={!this.isValid()} color="primary" tag={Link} to="/dinners">
                        {isLoading ? 'Loading' : 'Sign in'}
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SignIn;