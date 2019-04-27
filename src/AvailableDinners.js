import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import history from './history'
import Card from 'reactstrap/es/Card'
import CardBody from 'reactstrap/es/CardBody'
import CardText from 'reactstrap/es/CardText'
import CardSubtitle from 'reactstrap/es/CardSubtitle'
import CardTitle from 'reactstrap/es/CardTitle'
import Button from 'reactstrap/es/Button'
import Col from 'reactstrap/es/Col'

class AvailableDinners extends Component {
    state = {
        dinners: [],
        joinedDinners: []
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
            const dinnerLink = "/dinners/" + dinner.id
            return (
                <Col key={dinner.id}>
                    <Card style={{width: '21rem', margin: '20px', padding: '5px'}} color="dark" key={dinner.id}>
                        <CardBody>
                            <CardTitle><h3>{dinner.title}</h3></CardTitle>
                            <CardSubtitle className="mb-2 text-muted">Created
                                by: {dinner.creator.firstName} {dinner.creator.lastName}</CardSubtitle>
                            <CardText>
                                {dinner.description}
                            </CardText>
                            <Button color="primary" style={{margin: '5px'}} onClick={() => {
                                this.goTo(dinnerLink)
                            }}>View dinner</Button>
                            <Button color="success" onClick={() => {
                                this.joinDinner(dinner.id)
                            }}>Join Dinner</Button>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
    }

    goTo = (link) => {
        history.push(link)
    }


    joinDinner = (id) => {
        axios.post(
            "/api/dinners/" + id + "/join"
        ).then(response => {
                console.log(response.data) //how to change button to joined
            }
        )
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