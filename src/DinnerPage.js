import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Button from 'reactstrap/es/Button'
import Card from 'reactstrap/es/Card'
import CardBody from 'reactstrap/es/CardBody'
import CardTitle from 'reactstrap/es/CardTitle'
import CardSubtitle from 'reactstrap/es/CardSubtitle'
import CardText from 'reactstrap/es/CardText'
import history from './history'
import Row from 'reactstrap/es/Row'
import Col from 'reactstrap/es/Col'

class DinnerPage extends Component {
    state = {
        dinner: {},
        acceptedAttendees: [],
        pendingAttendees: []
    }

    componentDidMount() {
        const link1 = "/api/dinners/" + this.props.match.params.id
        axios.get(link1
        ).then(response => {
                this.setState({dinner: response.data})
            }
        ).catch()//catch error

        const link2 = "/api/dinners/" + this.props.match.params.id + "/attendees?accepted=true"
        axios.get(link2
        ).then(response => {
                this.setState({acceptedAttendees: response.data})
            }
        ).catch()//catch error

        const link3 = "/api/dinners/" + this.props.match.params.id + "/attendees?accepted=false"
        axios.get(link3
        ).then(response => {
                this.setState({pendingAttendees: response.data})
            }
        ).catch()//catch error
    }


    mapAcceptedAttendees = () => {
        return this.state.acceptedAttendees.map((attendee) => {
            const link = "/dinners/" + this.props.match.params.id + "/feedback"
            return (
                <span key={attendee.id} style={{fontSize: '14px'}}>
                    &nbsp;&nbsp;- {attendee.firstName} {attendee.lastName}
                    <a href={link} color="secondary" style={{margin: '5px'}} onClick={() => {
                        this.goTo("/dinners/" + this.props.match.params.id + "/feedback")
                    }}>[Leave Feedback]</a>
                </span>
            );
        });
    }

    mapPendingAttendees = () => {
        return this.state.pendingAttendees.map((attendee) => {
            return (
                <span key={attendee.id}>
                    <h6>&nbsp;&nbsp;- {attendee.firstName} {attendee.lastName}</h6>
                    <Button color="secondary" style={{margin: '5px'}} onClick={() => {
                        this.goTo("/dinners" + this.props.match.params.id + "feedback")
                    }}>Leave Feedback</Button>
                </span>
            );
        });
    }


    renderDinner = () => {
        return (
            <div>
                <Card style={{width: '100%', margin: '20px', padding: '20px'}} color="dark">
                    <CardBody>
                        <Row>
                            <Col md="7" lg="7" sm="12">
                                <CardTitle><h3>{this.state.dinner.title}</h3></CardTitle>
                                <CardSubtitle className="mb-2 text-muted">Created
                                    by: </CardSubtitle>
                                <CardText>
                                    {this.state.dinner.description}
                                </CardText>
                                <CardText>
                                    Maximum amount of guests: {this.state.dinner.maxGuests}
                                </CardText>

                                <Button color="primary" style={{margin: '5px'}} onClick={() => {
                                    this.goTo("/dinners")
                                }}>Discover More</Button>
                                <Button color="success" onClick={() => {
                                    this.joinDinner(this.state.dinner.id)
                                }}>Join Dinner</Button>
                            </Col>
                            <Col md="5" lg="5" sm="12">
                                <Row>
                                    <Col>
                                        <h4>
                                            Accepted guests:
                                        </h4>
                                        <p>
                                            {this.mapAcceptedAttendees()}
                                        </p>
                                        <hr style={{borderColor: 'white'}}/>
                                        <h4>
                                            Waiting list:
                                        </h4>
                                        <p>
                                            {this.mapPendingAttendees()}
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }

    joinDinner = (id) => {
        axios.post(
            "/api/dinners/" + id + "/join"
        ).then(response => {
                console.log(response.data) //how to change button to joined
            }
        )
    }

    goTo = (link) => {
        history.push(link)
    }

    render() {
        return (
            <div>
                {this.renderDinner()}
            </div>
        );
    }

}

export default DinnerPage;