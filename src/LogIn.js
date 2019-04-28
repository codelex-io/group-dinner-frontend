import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Button
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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
            <Container className="SignIn">
                <div className="App">
                    <h4>LOGIN WITH FACEBOOK AND GOOGLE</h4>

                    <FacebookLogin
                        appId="354017915232853"
                        fields="name,email,picture"
                        callback={responseFacebook}
                        autoLoad={true}
                        icon="fa-facebook"
                    />
                    <br/>
                    <br/>

                    <GoogleLogin
                        clientId="clean-mason-238908" 
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        //API key= AIzaSyBuAnpN0wjlLoOJN-we1FmlxEEm_hpQRTY
                    />

                </div>
                <h2>Sign in</h2>
                <Form className="form" noValidate>
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
                    <Button disabled={!this.isValid()} color="primary"
                            onClick={this.onSubmit}>
                        {isLoading ? 'Loading' : 'Sign in'}
                    </Button>

                </Form>
            </Container>
        );
    }
}

export default LogIn;