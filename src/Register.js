import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, UncontrolledAlert} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import Row from 'reactstrap/es/Row'

class Register extends Component {
    state = {
        fullName: '',
        email: '',
        password: '',
        isLoading: false
    }

    onFullNameUpdate = fullName => {
        this.setState({fuName: fullName})
    }
    onEmailUpdate = email => {
        this.setState({email: email})
    }
    onPasswordUpdate = password => {
        this.setState({password: password})
    }

    goTo = (link) => {
        history.push(link)
    }

    onSubmit = () => {
        const {fullName, email, password} = this.state
        axios.post(
            `/api/register`,
            {
                fullName,
                email,
                password
            }
        ).then(res => {
                console.log(res)
                history.push("/dinners")
            }
        )
    }
    isValid = () => {
        const {fullName, email, password} = this.state
        if (!fullName || fullName.length === 0) {
            return false

            if (!email || email.length === 0) {
                return false
            }

            if (!password || password.length === 0) {
                return false
            }
            return true

        }
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className="Register">
                <h2>Register</h2>
                <Form className="form">
                    <FormGroup>
                        <Label>Full name*</Label>
                        <Input
                            type="text"
                            name="fullName"
                            id="exampleFullName"
                            placeholder="FullName"
                            onChange={e => this.onFullNameUpdate(e.target.value)}
                        />
                    </FormGroup>
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
                    <FormGroup>
                        <Label for="examplePassword">Password*
                            <UncontrolledAlert color="warning">Must contain at least one number and one uppercase
                                and lowercase letter, and at least 8
                                or more characters</UncontrolledAlert>
                        </Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            required
                            onChange={e => this.onPasswordUpdate(e.target.value)}
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button disabled={!this.isValid()} color="primary"
                                    onClick={this.onSubmit}>
                                {isLoading ? 'Loading' : 'Register'}
                            </Button>
                            <span>  or  </span>
                            <a href="/log-in" style={{color: 'white'}}>
                                Log in
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Register;