import React, {Component} from 'react'
import {Link } from "react-router-dom"
import './category.css'

import {Dropdown} from 'react-bootstrap'


class Category extends Component{
    state = {}

    render(){

        return(
            
             <div className="dropdown" >
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Category 

  </Dropdown.Toggle>

  <Dropdown.Menu  >
    <Dropdown.Item className="change-color" href="/planets/1">Mercury</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/2">Venus</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/3">Earth</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/4">Moon</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/5">Mars</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/6">Jupiter</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/7">Saturn</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/8">Uranus</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/9">Neptune</Dropdown.Item>
    <Dropdown.Item className="change-color" href="/planets/10">Pluto</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
               </div>    
        
        )
    }
}

export default Category