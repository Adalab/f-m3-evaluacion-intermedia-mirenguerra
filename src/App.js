import React from "react";
import "./styles/App.css";
import PokemonList from "./components/PokemonList";
import RouteComponent from './components/RouteComponent';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {     
    return (
      <div className="pokemon--container">
        <h1>My Pokemon List</h1>
        <PokemonList pokemonList={this.props.pokemonList}/>
        <RouteComponent />
      </div>
    );
  }
}

App.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
}

export default App;
