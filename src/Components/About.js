import React , {Component } from 'react'
import Container from 'react-bootstrap/Container'
class About extends Component{

    render(){
        const image = require("../Images/About.JPG")
        return (

            
            <img src={image} style ={{width:'100%'}}> 
            </img>
            

        )
    }
}
export default About