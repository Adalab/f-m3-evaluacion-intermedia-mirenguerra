import React from "react";
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  render() {
    return (
      <div className="pokemon--card">
        <img 
          src={this.props.url}
          alt={"Pokemon " + this.props.name} 
        />
        <h1>{this.capitalize(this.props.name)}</h1>
        <ul className="pokemon--types-list">
          {this.props.types.map(type => {
            return (
              <li className="pokemon--types-element" key={type}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default PokemonCard;
