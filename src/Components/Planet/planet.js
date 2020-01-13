import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import './planet.css'


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
                    <div className="container">
                        {/* <h1>THIS IS A SINGLE PLANET COMPONENT</h1> */}
                        <h2> {planetObj.name}  </h2> 
                        <br></br>
                        <img className= "Image" src={planetObj.media.imgUrl} alt="" width="700" height="600"/>
                        
                        <p>{planetObj.media.descrpition}</p> <br/>
                        <a className="target" target='_blank' href={planetObj.media.vidUrl}> Go watch video </a>
                        <br />
                        <br />
                        <h3><Link to="/planets">Back</Link></h3>
                        {/* <link ref={planetObj.media.imgUrl}>Go watch video</link> */}
                    
                       

                    </div>

                : null}
                
            </div>
         )
    }
}
 
export default withRouter(Planet)