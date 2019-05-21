import React from "react";
import '../styles/PokemonList.css';
import PokemonCard from "./PokemonCard";
import PropTypes from 'prop-types';


class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemon--list">
        {this.props.pokemonList.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                types={pokemon.types}
                id={pokemon.id}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object),
}

export default PokemonList;
