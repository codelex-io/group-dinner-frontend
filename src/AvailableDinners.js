import React, {Component} from 'react';
import {Button, Jumbotron} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'

class AvailableDinners extends Component {
    state = {
        dinners: []
    }

    componentDidMount() {
        axios.get(`/api/dinners`
        ).then(response => {
                this.setState({dinners: response.data})
            }
        ).catch()//catch error
    }

    renderDinners = () => {
        return this.state.dinners.map((dinner) => {
            const link = "/dinners/" + dinner.id
            return (
                <Jumbotron key={dinner.id}>
                    <h1 className="display-3">{dinner.title}</h1>
                    <p className="lead">{dinner.description}</p>
                    <hr className="my-2"/>
                    <p>{dinner.creator.email}</p>
                    <p>{dinner.maxGuests}</p>
                    <p className="lead">
                        <Button color="primary" onClick={() => {
                            this.goTo(link)
                        }}>View dinner</Button>
                    </p>
                </Jumbotron>
            );
        });
    }

    goTo = (link) => {
        history.push(link)
    }

    render() {
        return (
            <div>
                {this.renderDinners()}
            </div>
        );
    };

}

export default AvailableDinners;