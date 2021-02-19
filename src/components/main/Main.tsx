import React, { Component } from "react";
import Header from "../header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../header/header.css' // header is placed here because it has access to sidebar
import './main.css'

class Main extends Component {

    render() {
        return (

            <div className="main-wrapper">

                {this.props.children}

            </div>

        )
    }
}

export default Main