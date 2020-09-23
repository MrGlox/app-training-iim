import React, { Component } from 'react';

// Exemple 1 OBSOLÈTE
function Item() {
  // render
  return <div>Item</div>;
}

// Exemple 2 COMPOSANT D'AFFICHAGE
const Item2 = (props) => {
  // render
  const value = props + 1;
  return <div>{value}</div>;
};

// Exemple 3 COMPOSANT D'AFFICHAGE RACCOURCIS
const Item3 = () => <div>Item</div>; // render

// Exemple 4 COMPOSANT CONTAINER
class Item4 extends Component {
  state = {
    value: 'lel',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    // Méthode fournie par React.Component
    return <div>Item</div>;
  }
}

export default Item;

// const div = document.querySelector('div');
// const newP = div.appendChild('P');
// const value = 'fjdsqlmkj';
// newP.innerHTML = value;

// // EQUIVAUT À
// return (
//   <div className="toto" fillRule="evenodd">
//     <p>{value}</p>
//     <label htmlFor=""></label>
//     <input type="text" />
//   </div>
// );
