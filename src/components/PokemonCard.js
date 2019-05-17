import React from "react";

class PokemonCard extends React.Component {
  render() {
    return (
      <div className="pokemon--card">
        <img src={this.props.url} alt={"Pokemon " + this.props.name} />
        <h1>{this.props.name}</h1>
        <ul className="pokemon--types-list">
          {this.props.types.map(type => {
            return <li className="pokemon--types-element" key={type}>{type}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonCard;
