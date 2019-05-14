import React from 'react';
import PokemonCard from './PokemonCard';
import pokemons from '../PokemonArray';

class PokemonList extends React.Component{
    render(){
        return(
            <div>
                {pokemons.map((pokemon)=> {
                    return(
                    <PokemonCard
                        key={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}
                        types= {pokemon.types}
                    />)
                })}
            {/* <PokemonCard 
                name="caterpie" 
                url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                types={["bug", "hola"]}
            />
            <PokemonCard 
                name="caterpie" 
                url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                types={["bug", "hola"]}
            />
            <PokemonCard 
                name="caterpie" 
                url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
                types={["bug", "hola"]}
            /> */}
            </div>
        )
    }
}

export default PokemonList;