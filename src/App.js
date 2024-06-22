import React from 'react';
import './App.css';
import Facture from './compenents/Facture'; 
 
export default class App extends React.Component {
  render() {
    return (
      <div>
       
        <Facture />
      </div>
    );
  }
}




/*
import Ingredient from './Ingredient';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: [
        'ingredient1',
        'ingredient2',
        'ingredient3',
        'ingredient4',
        'ingredient5',
      ]
    };
  }

  render() {
    const { ingredients } = this.state;

    return (
      <div>
        <h1>Liste des ingrédients :</h1>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <Ingredient name={ingredient} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}*/
