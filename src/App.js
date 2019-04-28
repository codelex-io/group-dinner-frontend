import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Register from './Register'
import LogIn from './LogIn'
import CreateDinner from './CreateDinner'
import Dinners from './Dinners'
import Header from './Header'
import DinnerPage from './DinnerPage'
import Feedback from './Feedback'
import history from './history'

class App extends Component {
    
    render() {
        return (
            <Router history={history}>
                <Header/>
                <div style={{
                    backgroundColor: 'rgba(1,1,1,0.5)',
                    color: 'white',
                    margin: '3% 5%',
                    padding: '20px 50px',
                    fontFamily: 'Trebuchet MS'
                }}>

                    <Switch>
                        <Route path="/log-in" component={LogIn}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/create-dinner" component={CreateDinner}/>
                        <Route path="/dinners/:id" component={DinnerPage}/>
                        <Route path="/dinners" component={Dinners}/>
                        <Route path="/dinners/:id/feedback" component={Feedback}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;