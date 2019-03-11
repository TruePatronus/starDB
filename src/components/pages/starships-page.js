import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipsList} from '../sw-components/';

const  StarshipsPage = ({ history }) => {
  return (
    <StarshipsList onItemSelected={(itemId) => {
      history.push(itemId);
    }}/>
  );
};

export default withRouter(StarshipsPage);