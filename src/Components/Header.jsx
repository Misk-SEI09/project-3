import React from 'react';
import { Link } from 'react-router-dom'


function Header(){

 return(
     <nav style={headerStyle}>
         
         <Link to='/'>Home</Link> |
         
         <Link to='/'>Read Later</Link> |
         
         <Link to='/'>Category</Link> |

         {/* <Link to='/'>Weight</Link> */}
        

{/* <ul>
  <li><a href="/">Home</a></li>
  <li><a href="">Read Later</a></li>
  <li><link href="#contact">Catgegory</linl></li>

</ul> */}
         
     </nav>

     
 )
 }
 const headerStyle ={
    // textAlign: 'center',
    display: 'flex',
    // :'',
    color: '#fff',
    padding: '10px',
    background: '#333',
// list-style-type: none,
  margin: 0
}

export default Header