import React from 'react';

class PokemonCard extends React.Component{
    render(){
        return(
            <div className="card">
                <img src={this.props.url} alt="un pokemon"/>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.types.map((type) => {
                        return(
                        <li key={type}>{type}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default PokemonCard