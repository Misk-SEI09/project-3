import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import planetsMedia from './Components/Data/planetsMedia'

import Header from './Components/Header'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Planets from './Components/Planets/Planets.jsx'
import Planet from './Components/Planet/planet.js'

//import planetsInfo from './Components/Data/planets' // just in case the API did not work

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

        for(let i = 0; i < copyState.planets.length ; i++){
            copyState.planets[i].media = planetsMedia[i]
        }

      this.setState(copyState)

    })
    .catch(function(error) {
      console.log("Got error",error)
    })
    
  } // end componet didmount


  render(){
    
  return (
    <Router>
    <div className="App">
      
      <Header />

     <h1> <Link to="/planets">Planets</Link> </h1>

      <Route path="/planets" exact render={ () => 
      <Planets planets={this.state.planets}/> } // sent the array to the component
      />

      <Route path="/planets/:id" render={ () => 
      <Planet planets={this.state.planets} /> 
       }/>


    </div>
    </Router>

  )// end return
} // end rendder
} // end class App

export default App
