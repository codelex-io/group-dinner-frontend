import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Row from 'reactstrap/es/Row'

const responseFacebook = (response) => {
    console.log(response);
}
const responseGoogle = (response) => {
    console.log(response);
}

class LogIn extends Component {
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
    goTo = (link) => {
        history.push(link)
    }
    onSubmit = () => {
        axios.post(
            `/api/sign-in`,
            {email: this.state.email, password: this.state.password}
        ).then(res => {
                console.log(res)
                history.push("/dinners")
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
            <Container className="LogIn">
                <h2>Log in</h2>
                <Form className="form" noValidate>

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
                        <Label for="psw">Password*</Label>
                        <Input
                            type="password"
                            id="psw"
                            placeholder="********"
                            required
                            onChange={e => this.onPasswordUpdate(e.target.value)}
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button disabled={!this.isValid()} color="primary"
                                    onClick={this.onSubmit}>
                                {isLoading ? 'Loading' : 'Log in'}
                            </Button>
                            <span>  or  </span>
                            <a href="/register" style={{color: 'white'}}>
                                Register
                            </a>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col sm="12" md="2" xs lg="2"/>
                    <Col sm="12" md="4" xs lg="4">
                        <FacebookLogin
                            appId="354017915232853"
                            fields="name,email,picture"
                            callback={responseFacebook}
                            autoLoad={true}
                            icon="fa-facebook"
                        />
                    </Col>
                    <Col sm="12" md="4" xs lg="4">
                        <GoogleLogin
                            clientId="" //CLIENTID NOT CREATED YET
                            buttonText="LOGIN WITH GOOGLE"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        />
                    </Col>
                    <Col sm="12" md="2" xs lg="2"/>
                </Row>
            </Container>
        );
    }
}

export default LogIn;