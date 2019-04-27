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

class DinnerPage extends Component {
    state = {
        dinner: {}
    }

    componentDidMount() {
        const link = "/api/dinners/" + this.props.match.params.id
        axios.get(link
        ).then(response => {
                this.setState({dinner: response.data})
            }
        ).catch()//catch error
    }

    renderDinner = () => {
        return (
            <div>
                <Card style={{width: '18rem', margin: '20px'}} color="dark">
                    <CardBody>
                        <CardTitle><h3>{this.state.dinner.title}</h3></CardTitle>
                        <CardSubtitle className="mb-2 text-muted">Created
                            by:</CardSubtitle>
                        <CardText>
                            {this.state.dinner.description}
                        </CardText>
                        <Button color="primary" style={{margin: '5px'}} onClick={() => {
                            this.goTo("/dinners")
                        }}>Discover More</Button>
                        <Button color="success" onClick={() => {
                            this.joinDinner(this.state.dinner.id)
                        }}>Join Dinner</Button>
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