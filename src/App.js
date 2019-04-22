import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from './Register'
import SignIn from './SignIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/sign-in/" component={SignIn}/>
                    <Route path="/register/" component={Register}/>
                    <Route path="/create-dinner" component={CreateDinner}/>
                    <Route path="/dinners/" component={Dinners}/>
                </div>
            </Router>
        );
    }
}

export default App;