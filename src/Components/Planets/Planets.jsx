import React, { Component } from 'react';
//import './Planet.css'
import { Link , withRouter} from 'react-router-dom'

class Planets extends Component {
    state = {  }
    render() { 
        console.log("Hey these are the props in Planets component")
        console.log(this.props)
        return ( 
            <div>
                <h1>THIS IS ALL PLANETSS COMPONENT</h1>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                 {this.props.planets.map( (planet, index) => {
                return <div key={index}>
                    <h3> <Link to={`${this.props.match.path}/${planet.id}`} > {planet.name} </Link> </h3>
                    <br />
                    <img className= "Image" src={planet.media.imgUrl} alt="" width="300" height="250" style={{display: 'flex'}}/>
                    </div>
                } )}
            </div>   
            </div>
         );
    }
}
 
export default withRouter(Planets)