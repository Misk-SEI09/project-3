import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import planetsMedia from './Components/Data/planetsMedia'

class  App extends Component  {
  state = {
    plantes: [],
    planetsMedia: []
  }  // end state

  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets`)
    .then((response) =>{
      let planets = response.data
      //console.log(planets)
      let copyState = {...this.state}
      copyState.plantes = planets
      copyState.planetsMedia = planetsMedia
      this.setState(copyState)


      // this.setState(({...copyState})=>{
      //   copyState.plantes = response.data.plan
      //   return copyState
      // })

      console.log(this.state)
    })
    .catch(function(error) {
      console.log("Got error",error)
    })
    
  } // end componet didmount

  render(){
    
  return (
    <div className="App">
      

    </div>
  )// end return
} // end rendder
} // end class App

export default App
