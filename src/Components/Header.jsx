import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Header(){

 return(
     <nav >
         
         <Button  variant="outline-dark" ><Link to='/' style={ {color:"white"} }>Home</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/' style={ {color:"white"} }>Read Later</Link></Button> |
         <Button  variant="outline-dark" ><Link to='/' style={ {color:"white"} }>Category</Link></Button> |

         {/* <Link to='/'>Weight</Link> */}
         
     </nav>

     
 )
 }


export default Header