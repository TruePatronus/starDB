import React from 'react';

import './item-details.css';
import ErrorButton from '../error-button/';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

const ItemDetails = ({ item, image, children }) => {
  if (!item) {
    return '';
  }

  return (
    <div className="item-details card">
      <img className="item-image"
        src={image}
        alt="EBLO TUPOE" />
      <div className="card-body">
        <h4>{ item.name }</h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
        <ErrorButton />
      </div>
    </div>
  );
}

export default ItemDetails;

export {
  Record
};
