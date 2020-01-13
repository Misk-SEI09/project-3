import React from 'react';
import { Link } from 'react-router-dom'


function Header(){

 return(
     <nav >
         
         <Link to='/'>Home</Link> |
         
         <Link to='/'>Read Later</Link> |
         
         <Link to='/'>Category</Link> |

         {/* <Link to='/'>Weight</Link> */}
         
     </nav>

     
 )
 }


export default Header