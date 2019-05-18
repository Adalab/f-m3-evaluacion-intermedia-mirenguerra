import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    console.log(this.props);
     
    return (
      <div className="pokemon--container">
        <h1>My Pokemon List</h1>
        <PokemonList pokemonList={this.props.pokemonList}/>
      </div>
    );
  }
}

App.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
}

export default App;
