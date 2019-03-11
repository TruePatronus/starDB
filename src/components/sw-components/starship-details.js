import React from 'react';
import { Record } from '../item-details';
import { ItemDetailsHOC, withSwapiService } from '../hoc-helpers'

const StarshipDetails = (props) => {
  return (
    <ItemDetailsHOC {...props}>
      <Record field="model" label="Model" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetailsHOC>
  );
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageURL: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);