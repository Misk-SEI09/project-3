import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Category from '../category/category'
import planets from '../Planets/Planets'

import './header.css'
function Header(){

 return(
     <nav className="Header">
         
         <Button  variant="outline-dark" ><Link to='/' style={ {color:"white" } }>Home</Link></Button> |
         {/* < planets /> */}
         <Button  variant="outline-dark" ><Link to='/Planets' style={ {color:"white"} }>Planets</Link></Button> |
         <Category />
         <Button  variant="outline-dark" ><Link to='/search' style={ {color:"white"} }>Search</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/weight' style={ {color:"white"} }>Weight</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/about' style={ {color:"white"} }>About</Link></Button> |   
         {/* <Link to='/'>Weight</Link> */}   
     </nav>   
 )
 }


export default Header