import React from 'react';
import ItemList from '../item-list/';
import { 
  compose,
  withData,
  withSwapiService,
  withChildFunction
} from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{`${name} (${model})`}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonsList = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                      )(ItemList);

const PlanetsList = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withData,
                        withChildFunction(renderName)
                      )(ItemList);

const StarshipsList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName)
                      )(ItemList);

export {
  PersonsList,
  PlanetsList,
  StarshipsList
}

