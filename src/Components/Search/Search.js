import React, { Component } from 'react'
import "./Search.css"
import axios from 'axios'


class Search extends Component {
    state = { 
        apiData: [],
        formData: {
            keyword: ""
        }
     }


    handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        console.log("am handle change method")
        console.log(`this is the input tag name ${inputTagName}`)
        console.log(`this is the input Value ${inputValue}`)

        const formDataCopy = {...this.state.formData} // copied the current state form
        formDataCopy[inputTagName] = inputValue // update the keyword 
        this.setState({ // update the formData in my state with the search keyword the user entered in the form
            formData: formDataCopy
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("am handle submit method")

        const formDataCopy = {...this.state.formData} // copy of the recent state with the updated form information
        const searchKeyword = formDataCopy.keyword

        console.log(`The user is searching for ${searchKeyword}`)

        axios.get(`https://images-api.nasa.gov/search?q=${searchKeyword}`) // fetching search results from NASA API
        .then(response => {
            const searchResult = response.data.collection.items // an array of search result
            console.log(searchResult)

            // const copyApiData = [...this.state.apiData]
            // copyApiData

            this.setState({
                apiData: searchResult
            })

            console.log('this is the updated state')
            console.log(this.state)
        }) // end then

        .catch(function(error) {
            console.log("Got error",error)
        }) // end catch

    } // end handleSubmit method

    render() {
        console.log("hey  am seach component") 
        return ( 
            <div className="search-container">
                <h1>Get lost in Space</h1>
                <form  onSubmit={this.handleSubmit} className="input-group input-group-rounded">
                    
                    {/* <label>Get lost in Space </label><br /> <br/> */}
                        <input 
                        className="input-group-field"
                        name="keyword"
                        value={this.state.formData.keyword}
                        placeholder="anything in space"
                        onChange={this.handleChange}
                        ></input>
                    <br/>
                    
                    <div class="input-group-button">
                         <input type="submit" class="button secondary" value="Search"/>
                    </div>
                </form>


                   <div className="card-columns">
                        
                        {this.state.apiData.map( (data, index) => (
                                <div className="card search-card" key={index}>
                                    <div className="card-body">
                                        <img className={"card-img"} src={data.links[0].href} alt="" style={{clear: "both"}}/> 
                                        <p style={{clear: "both", paddingTop: "10px", color: "white"}}> {data.data[0].title} </p>
                                        <em style={{color: "white"}}> {data.data[0].description} </em>
                                    </div>
                                </div>
                            ))}  
                        
                    </div>
            </div>
         )
    }
}
 
export default Search