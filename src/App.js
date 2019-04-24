import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import Register from './Register'
import SignIn from './SignIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'
import DinnerPage from './DinnerPage'
import history from '·/history'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/sign-in/" component={SignIn}/>
                        <Route path="/register/" component={Register}/>
                        <Route path="/create-dinner" component={CreateDinner}/>
                        <Route path="/dinners/" component={Dinners}/>
                        <Route path="/dinner/{id}" component={DinnerPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;