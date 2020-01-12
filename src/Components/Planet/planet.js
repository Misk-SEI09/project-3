import React, { Component } from 'react';

class Planets extends Component {
    // state = {  }
    render() { 
        const planets = this.props.planets
        const media = this.props.planetsMedia
        // <img src={planet.img} alt=''/>
        return ( 
            <div>
                <h1>Hey am planets component</h1>
                {planets.map( (planet, index) => {
                return <div key={index}>
                    <h3>{planet.id} {planet.name} {planet.gravity} </h3> </div>
                } )}
            </div>
         )
    }
}
 
export default Planets;