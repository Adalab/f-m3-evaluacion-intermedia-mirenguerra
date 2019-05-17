import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

class App extends React.Component {
  render() {
    return (
      <div className="pokemon--container">
        <h1>My Pokemon List</h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
