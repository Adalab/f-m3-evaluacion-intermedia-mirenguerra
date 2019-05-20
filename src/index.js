import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import pokemons from "./data/pokemonArray";




ReactDOM.render(<App pokemonList={pokemons} />, document.getElementById("root"));

