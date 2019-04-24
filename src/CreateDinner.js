import React, {Component} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'

class CreateDinner extends Component {
    state = {
        title: "",
        maxGuest: "",
        description: "",
        location: "",
        dateTime: "",
        isLoading: false
    }
    onTitleUpdate = title => {
        this.setState({title: title})
    }
    onMaxGuestsUpdate = maxGuest => {
        this.setState({maxGuest: maxGuest})
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
        const {title, maxGuest, description, location, dateTime} = this.state
        axios.post(
            `http://localhost:8080/api/create-dinner`,
            {
                title,
                maxGuest,
                description,
                location,
                dateTime
            }
        ).then(res => {
                console.log(res)
                this.setState({isLoading: false})
            }
        )
    }

    isValid = () => {
        const {title, maxGuest, description} = this.state
        if (!title || title.length === 0) {
            return false
        }
        if (!maxGuest || maxGuest.length === 0) {
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
                    <Col>
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
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Max Guests</Label>
                            <Input
                                type="number"
                                name="maxGuests"
                                id="maxGuests"
                                placeholder="Max Guests"
                                onChange={e => this.onMaxGuestsUpdate(e.target.value)}/>
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="description"
                                onChange={e => this.onDescriptionUpdate(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Location</Label>
                            <Input
                                type="textarea"
                                name="location"
                                id="location"
                                placeholder="location"
                                onChange={e => this.onLocationUpdate(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Date and Time</Label>
                            <Input
                                type="datetime-local"
                                name="dateTime"
                                id="dateTime"
                                placeholder="13th may, 2019, 3pm"
                                onChange={e => this.onDateTimeUpdate(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Button disabled={!this.isValid()} color="primary" tag={Link} to="/dinners">
                        {isLoading ? 'Loading' : 'Create dinner'}
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default CreateDinner;