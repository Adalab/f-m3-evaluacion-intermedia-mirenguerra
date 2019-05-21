import React from "react";

class PokemonDescription extends React.Component {

  render() {
    return (
        <p>This is child number {this.props.match.params.id}</p>
    //   <React.Fragment>
    //     <h1>{this.props.match.params.name}</h1>
    //     <ul>
    //       {this.props.match.params.types.map(type => {
    //         return (
    //           <li key={type}>
    //             {type}
    //           </li> 
    //         );
    //       })}
    //     </ul>
    //   </React.Fragment>
    );
  }
}

export default PokemonDescription;
