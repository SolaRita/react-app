import React from "react";
import { Component } from "react";
import symbol from "../assets/ico/symbol.svg";

class Navbar extends Component{
    render(){
        return(
            <div className="ct-header">
               <link to="/"><img className="img-logo" src={symbol} alt="logo" /></link>
                <link to="/create" alt="cREATE">CREATE</link>
            </div>
        )
    }
}

export default Navbar;