import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class DinnerPage extends Component {
    state = {
        id: 1,
        dinner : {}
    }

    componentDidMount() {
        axios.get(`/api/dinners/` + this.props.match.params.id
        ).then(response => {
                this.setState({dinner: response.data})
            console.log(this.state.dinner.title)
            }
        ).catch()//catch error
    }

    render() {
        return (
            <div>
                <p>helloooooo</p>
            </div>
        );
    };
}

export default DinnerPage;