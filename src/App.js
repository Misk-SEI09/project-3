import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import planetsMedia from './Components/Data/planetsMedia'
import Header from './Components/Header/Header'
import {Route,Link } from 'react-router-dom'
import Planets from './Components/Planets/Planets.jsx'
import Planet from './Components/Planet/planet.js'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Search from "./Components/Search/Search";

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
   
    <div className="App">
      <Header />
     <Route path="/" exact render={() => {
       return (
        <h1> <Button  variant="outline-dark" ><Link to="/planets" style={{color:"white"}}>Planets</Link></Button> </h1>
       )
     }} />
      <Route path="/planets" exact render={ () => 
      <Planets planets={this.state.planets}/> } // sent the array to the component
      />
      <Route path="/planets/:id" render={ () => 
      <Planet planets={this.state.planets} /> 
       }/>

      <Footer/>
      <h1> Welcome </h1>
      <p> Misk team: - Abduallah 
        - Shahad
        - Mashael
        Story: Inspired by ......
      </p>
    

    <Route path="/search" exact component={Search}/>
    

      
    </div>
  )// end return
} // end rendder
} // end class App

export default App
