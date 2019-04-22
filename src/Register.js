import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isLoading: false
    }
    onFirstNameUpdate = firstName => {
        this.setState({firstName: firstName})
    }
    onLastNameUpdate = lastName => {
        this.setState({lastName: lastName})
    }
    onEmailUpdate = email => {
        this.setState({email: email})
    }
    onPasswordUpdate = password => {
        this.setState({password: password})
    }

    onSubmit = () => {
        const {firstName, lastName, email, password} = this.state
        axios.post(
            `http://localhost:8080/api/register`,
            {
                firstName,
                lastName,
                email,
                password
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
            }
        )
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className="Register">
                <h2>Register</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>First name*</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="exampleFirstName"
                                placeholder="FirstName"
                                required
                                onChange={e => this.onFirstNameUpdate(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Last name*</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="exampleLastName"
                                placeholder="LastName"
                                required
                                onChange={e => this.onLastNameUpdate(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
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
                            <Label for="examplePassword">Password*
                                <h6>Must contain at least one number and one uppercase
                                    and lowercase letter, and at least 8
                                    or more characters</h6>
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
                    </Col>
                    <Button color="primary" tag={Link} to="/dinners">
                        {isLoading ? 'Loading' : 'Register'}

                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;