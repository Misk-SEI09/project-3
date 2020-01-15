import React, { Component } from 'react';
import '../Search/Search.css'
import { Link , withRouter} from 'react-router-dom'


class Weight extends Component {
    state = {
        value: 1,
        userWeight: 1
     }

    
    handleChange = (event) => {
        
        const inputWeight = event.target.value

        this.setState({
            value: inputWeight
        })

        // console.log(this.state.userWeight)

    }


    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            userWeight: this.state.value
        })

    }



    render() { 
        const notEarth = this.props.planets.filter( (planet) => (planet.id != 3)) // I dont want to show planet earth
        return ( 
            <div className="">
                <br/>

                <h3>Calculate Your Weight on Other Planets</h3>
                <form  onSubmit={this.handleSubmit} className="input-group input-group-rounded"  style={{marginTop: "50px", marginBottom: "40px"}}>
                    
                        <input 
                        className="input-group-field"
                        name="weight"
                        type= "number"
                        placeholder="your weight in kg"
                        onChange={this.handleChange}
                        ></input>
                    <br/>
                    
                    <div className="input-group-button">
                         <input type="submit" className="button secondary" value="Submit"/>
                    </div>
                </form>



            <div className="planets-container" >
                 {notEarth.map( (planet, index) => {
                return <div key={index} className="card">
                    <img className= "Img" src={planet.media.imgUrl} alt="" />
                    <p style={{color: "black"}}> Your Weight on {planet.name } is {Math.floor((planet.gravity/10) * this.state.userWeight)} </p>
                    <p> </p>
                    </div>
                } )}
            </div>   
            </div>
         );
    }
}
 
export default withRouter(Weight)