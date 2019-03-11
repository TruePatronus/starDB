import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetails } from '../sw-components';

import './app.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  onServiceChange = (e) => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log('swithced to ', Service.name);
      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <SwapiServiceProvider value={ this.state.swapiService }>
        <Router>
          <div className="star-db-app">
            <Header onServiceChange={ this.onServiceChange }/>
            <RandomPlanet />
            <Switch>
              <Route path="/" exact render={() => <h1> Welcome to StarDB </h1>} />
              <Route path="/people/:id?" component={ PeoplePage }/>
              <Route path="/planets/" component={ PlanetsPage }/>
              <Route path="/starships/" exact component={ StarshipsPage }/>
              <Route path="/starships/:id" render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={ id }/>
              }}/>
              <Route 
                path="/login" 
                render={() => (
                  <LoginPage 
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />
                )} />
              <Route 
                path="/secret"
                render={() => (
                  <SecretPage isLoggedIn={isLoggedIn} />
                )} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}