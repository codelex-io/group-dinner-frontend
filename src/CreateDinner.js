import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label,} from 'reactstrap';
import './App.css';
import axios from 'axios'
import history from './history'
import Row from 'reactstrap/es/Row'

class CreateDinner extends Component {
    state = {
        title: "",
        maxGuests: "",
        description: "",
        location: "",
        dateTime: "",
        isLoading: false
    }
    onTitleUpdate = title => {
        this.setState({title: title})
    }
    onMaxGuestsUpdate = maxGuests => {
        this.setState({maxGuests: maxGuests})
    }
    onDescriptionUpdate = description => {
        this.setState({description: description})
    }
    onLocationUpdate = location => {
        this.setState({location: location})
    }
    onDateTimeUpdate = dateTime => {
        this.setState({dateTime: dateTime})
    }

    onSubmit = () => {
        const {title, maxGuests, description, location, dateTime} = this.state
        axios.post(
            `/api/create-dinner`,
            {
                title,
                maxGuests,
                description,
                location,
                dateTime
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
                this.goTo("/dinners")
            }
        )
    }

    goTo = (link) => {
        history.push(link)
    }

    isValid = () => {
        const {title, maxGuests, description} = this.state
        if (!title || title.length === 0) {
            return false
        }
        if (!maxGuests || maxGuests.length === 0) {
            return false
        }
        if (!description || description.length === 0) {
            return false
        }
        return true
    }

    render() {
        const {isLoading} = this.state
        return (
            <Container className="CreateDinner">
                <h2>Create dinner</h2>
                <Form className="form">
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Dinner title"
                            onChange={e => this.onTitleUpdate(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Max Guests</Label>
                        <Input
                            type="number"
                            name="maxGuests"
                            id="maxGuests"
                            placeholder="Max Guests"
                            onChange={e => this.onMaxGuestsUpdate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="description"
                            onChange={e => this.onDescriptionUpdate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input
                            type="textarea"
                            name="location"
                            id="location"
                            placeholder="location"
                            onChange={e => this.onLocationUpdate(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Date and Time</Label>
                        <Input
                            type="datetime-local"
                            name="dateTime"
                            id="dateTime"
                            placeholder="13th may, 2019, 3pm"
                            onChange={e => this.onDateTimeUpdate(e.target.value)}/>
                    </FormGroup>
                    <Row>
                        <Col>
                            <Button disabled={!this.isValid()} color="primary" onClick={this.onSubmit}>
                                {isLoading ? 'Loading' : 'Create dinner'}
                            </Button>
                            <span>&nbsp;&nbsp;</span>
                            <a href="/dinners" style={{color: 'white'}}>
                                Cancel
                            </a>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateDinner;