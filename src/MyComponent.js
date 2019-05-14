import React from 'react';
import './MyComponent.css';
import PokemonList from './components/PokemonList';


class MyComponent extends React.Component {
  render(){
    return (
      <div className="MyComponent">
        <PokemonList/>
      </div>
    );
  }
}

export default MyComponent;
