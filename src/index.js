import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import pokemons from "./data/pokemonArray";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App pokemonList={pokemons} />
    </HashRouter>, 
    document.getElementById("react-root"));