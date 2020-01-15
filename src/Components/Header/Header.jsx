import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Header(){

 return(
     <nav className="Header">
         
         <Button  variant="outline-dark" ><Link to='/' style={ {color:"white" } }>Home</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/planets' style={ {color:"white"} }>Planets</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/search' style={ {color:"white"} }>Search</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/category' style={ {color:"white"} }>Category</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/about' style={ {color:"white"} }>About</Link></Button> |


         {/* <Link to='/'>Weight</Link> */}
         
     </nav>

     
 )
 }


export default Header