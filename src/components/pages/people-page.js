import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../row';
import { PersonsList, PersonDetails } from '../sw-components/';

const PeoplePage =({ history, match}) => {
  const { id } = match.params;
  return (
    <Row 
      left={<PersonsList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />} />
  );
}

export default withRouter(PeoplePage);