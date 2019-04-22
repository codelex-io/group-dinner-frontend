import React, {Component} from 'react';
import {
    Container, Form,
    Button,
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dinners extends Component {

    onSubmit = () => {
        axios.post(
            `http://localhost:8080/api/dinners`,
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
            }
        )
    }

    render() {
        return (
            <Container className="App">
                <h2>Group Dinner</h2>
                <Form className="Dinners">
                    <Button color="primary" tag={Link} to="/create-dinner"> Create dinner
                    </Button>
                </Form>
            </Container>
        );
    }

}

export default Dinners;