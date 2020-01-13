import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'


class Planet extends Component {
    // state = {  }
    render() { 
        console.log(this)
        const clickedPlanetId = parseInt(this.props.match.params.id)
        const planetObj = this.props.planets.find( (planet) => (planet.id === clickedPlanetId))
        console.log(planetObj)
    //    console.log(planetObj.id)
        return ( 
            // it gives undefined because planetobject has no value at first render, so: i make it = to null to hide the error !
            <div>
                {planetObj ? 
                    <div>
                        {/* <h1>THIS IS A SINGLE PLANET COMPONENT</h1> */}
                        <h3>{planetObj.id} {planetObj.name} {planetObj.gravity} </h3>
                        <img className= "Image" src={planetObj.media.imgUrl} alt="" width="700" height="600"/>
                        <br />
                        <h1><Link to="/planets">Back</Link></h1>
                    </div>
                : null}
                
            </div>
         )
    }
}
 
export default withRouter(Planet)