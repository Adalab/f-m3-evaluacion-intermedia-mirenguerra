import React from "react";
import "../styles/PokemonCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PokemonCard extends React.Component {
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className="pokemon--card" id={this.props.id} name={this.props.name}>
        <Link to={`/${this.props.id}`}>          
          <img src={this.props.url} alt={"Pokemon " + this.props.name} />
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
        </Link>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};

export default PokemonCard;
