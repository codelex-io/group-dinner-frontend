import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from './Register'
import SignIn from './SignIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'
import DinnerPage from './DinnerPage'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/sign-in/" component={SignIn}/>
                        <Route path="/register/" component={Register}/>
                        <Route path="/create-dinner" component={CreateDinner}/>
                        <Route path="/dinners/" component={Dinners}/>
                        <Route path="/dinner-id" compinent = {DinnerPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;