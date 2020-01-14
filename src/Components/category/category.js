import React, {Component} from 'react'


class Category extends Component{
    state = {}

    render(){

        return(
            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle"
                type="button" id="dropdownMenu1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                 Planets
               </button>

               <div className="">
                   <a className="" href=""></a>
                   <a className="" href=""></a>
                   <a className="" href=""></a>
                   <a className="" href=""></a>
                   <a className="" href=""></a>
                   <a className="" href=""></a>
               </div>


            </div>
        )
    }
}