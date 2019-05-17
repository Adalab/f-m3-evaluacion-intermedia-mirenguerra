import React from "react";
import PokemonCard from "./PokemonCard";
import pokemons from "../data/pokemonArray";

class PokemonList extends React.Component {
  render() {
    return (
      <ul className="pokemon--list">
        {pokemons.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                types={pokemon.types}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PokemonList;
