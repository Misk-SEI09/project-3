import React, { Component } from 'react';
//import './Planet.css'
class Planet extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <h1>{this.props.planet.id}</h1>
                <h1>{this.props.planet.name}</h1>
                <img className= "Image" src={this.props.planet.media.imgUrl} alt=""/>
                <p>{this.props.planet.gravity}</p>
                
            </div>
         );
    }
}
 
export default Planet;