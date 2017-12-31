import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import {routes} from '../routes';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
    render() {
        const router = routes.map((r, i) => {
            return (
                <Route
                    key={ i }
                    component={ r.component }
                    path={ r.path }
                    exact={ r.exact }
                />
            )
        });
        return (
            <div className="App">
                <Switch>
                    {router}
                </Switch>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">MasterMind Board Game</h1>
                </header>
            </div>
        );
    }
}

export default App;
