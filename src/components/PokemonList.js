import React from 'react';
import PokemonCard from './PokemonCard';
import pokemons from '../PokemonArray';

class PokemonList extends React.Component{
    render(){
        return(
            <div className="pokemon--list">
                {pokemons.map((pokemon)=> {
                    return(
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}
                        types= {pokemon.types}
                    />)
                })}
            </div>
        )
    }
}

export default PokemonList;