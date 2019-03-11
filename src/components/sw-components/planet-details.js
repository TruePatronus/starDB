import React from 'react';

import { Record } from '../item-details';
import { ItemDetailsHOC, withSwapiService } from '../hoc-helpers'

const PlanetDetails = (props) => {
  return (
    <ItemDetailsHOC {...props}>
      <Record field="diameter" label="Diameter" />
      <Record field="population" label="Population" />
    </ItemDetailsHOC>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageURL: swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);