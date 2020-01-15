import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="main">
                <br/>
                <br/>
                <h1>About Planets</h1>
                <div className="about"><p>
                    <br/>
                    This project is part of GA software engineering course, 
                    To develop a react application. In this application we used NASA
                    API to fetch the data about the planets where the user is able to 
                    view each planet along with its properties.

                </p></div>
                <br/>
                    <h2> Developed by Misk group:</h2>
                    <br/>
                    <h2 style={{color:'Grey'}}><ul>Abduallah</ul></h2>
                    <h2 style={{color:'Grey'}}><ul>Shahad</ul></h2>
                    <h2 style={{color:'Grey'}}><ul>Mashael</ul></h2>
            </div>
        )
    }
}

export default About