import React, { Component } from 'react'
import "./Search.css"

class Search extends Component {
    state = {  }


    handleChange = (event) => {
        console.log("am handle change method")
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("am handle submit method")
    }

    render() { 
        return ( 
            <div>
                <h1>This is search Component</h1>
                <form  onSubmit={this.handleSubmit}>
                    
                    <label>Get lost in Space </label><br />
                        <input 
                        name="keyword"
                        value=""
                        placeholder="Search for anything in space"
                        onChange={this.handleChange}
                        ></input>
                    <br/>

                    <button type="submit">Submit</button>
                </form>
            </div>
         )
    }
}
 
export default Search;