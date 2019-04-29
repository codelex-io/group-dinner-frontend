import React, {Component} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
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
            `/api/log-in`,
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
                <h2>LOGIN</h2>
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
                    <Button disabled={!this.isValid()} color="primary"
                            onClick={this.onSubmit}>
                        {isLoading ? 'Loading' : 'Login'}
                    </Button>

                </Form>
            </Container>
        );
    }
}

export default LogIn;