import React, { Component } from 'react';

import Row from '../row';
import SwapiService from '../../services/swapi-service';
import { PlanetsList, PlanetDetails } from '../sw-components/';

export default class PlanetsPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row 
        left={<PlanetsList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={this.state.selectedItem}/>} />
    );
  }
}