import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import planetsMedia from './Components/Data/planetsMedia'
import Planet from './Components/Planets/Planets'
import Planets from './Components/Planet/planet'

class  App extends Component  {
  state = {
    planets: []
  }  // end state

  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets`)
    .then((response) =>{
      let planets = response.data
      console.log(planets)
      let copyState = {...this.state}
      copyState.planets = planets
      // copyState.planetsMedia = planetsMedia
        for(let i = 0; i < copyState.planets.length ; i++){
            copyState.planets[i].media = planetsMedia[i]
        }
      console.log(copyState.planets)
      this.setState(copyState)
      // this.setState(({...copyState})=>{
      //   copyState.planets = response.data.plan
      //   return copyState
      // })

      //console.log(this.state)
    })
    .catch(function(error) {
      console.log("Got error",error)
    })
    
  } // end componet didmount

  render(){
    
  return (
    <div className="App">
      {this.state.planets.map ((planet,index)=> {
        return (
          <Planet key={index} planet={planet}/>
        )
      }) }
      
    <Planets planets={this.state.planets} planetsMedia={this.state.planetsMedia}/>
    </div>
  )// end return
} // end rendder
} // end class App

export default App
