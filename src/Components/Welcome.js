import React , {Component } from 'react'
import Image from 'react-bootstrap/Image'

class Welcome extends Component{

    render(){
        const image = require("../Images/Home.JPG")
        return (

            
            <Image src={image} style ={{width:'100%'}} />
        )
    }
}
export default Welcome