import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <h1>About Planets</h1>
                <br/>
                <p>
                    This project focuses in displaying all the Planets to the user 
                </p>
                    <h2> Developed by Misk group:</h2>
                    <br/>
                    <h2 style={{color:'Grey'}}><ul>Abduallah</ul></h2>
                    <br/>
                    
                    <h2 style={{color:'Grey'}}><ul>Shahad</ul></h2>
                    <br/>

                    <h2 style={{color:'Grey'}}><ul>Mashael</ul></h2>
                    <h2>Inspired by</h2>
                    <h3>Misk organization and ... Musuem </h3>
            </div>
        )
    }
}

export default About