import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Header(){

 return(
     <nav >
         
         <Button><Link to='/'>Home</Link></Button> |
         
         <Link to='/'>Read Later</Link> |
         
         <Link to='/'>Category</Link> |

         {/* <Link to='/'>Weight</Link> */}
         
     </nav>

     
 )
 }


export default Header