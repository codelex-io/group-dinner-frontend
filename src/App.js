import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Register from './Register'
import SignIn from './SignIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'
import DinnerPage from './DinnerPage'
import history from './history'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/sign-in" component={SignIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/create-dinner" component={CreateDinner}/>
                        <Route path="/dinners/:id" component={DinnerPage}/>
                        <Route path="/dinners" component={Dinners}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;