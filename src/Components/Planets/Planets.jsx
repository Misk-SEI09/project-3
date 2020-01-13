import React, { Component } from 'react';
import './planets.css'
import { Link , withRouter} from 'react-router-dom'

class Planets extends Component {
    state = {  }
    render() { 
        // console.log(this.props)
        return ( 
            <div >
                <h3>Your Journey Gateway To Explore the Solar System Planets</h3>
            <div className="planets-container" >
                 {this.props.planets.map( (planet, index) => {
                return <div key={index} className="card">
                    <img className= "Image" src={planet.media.imgUrl} alt="" />
                    <h3> <Link to={`${this.props.match.path}/${planet.id}`} > {planet.name} </Link> </h3>
                    </div>
                } )}
            </div>   
            </div>
         );
    }
}
 
export default withRouter(Planets)