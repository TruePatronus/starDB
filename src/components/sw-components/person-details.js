import React from 'react';

import { Record } from '../item-details';
import { ItemDetailsHOC, withSwapiService } from '../hoc-helpers'

const PersonDetails = (props) => {
  return (
    <ItemDetailsHOC {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetailsHOC>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageURL: swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);