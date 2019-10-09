import React , {Component } from 'react'

class ProductList extends Component{

    render(){
        const image = require("../Images/Enviskates.PNG")
        return (

            <img src={image} style ={{width:'100%'}}> 
            </img>


        )
    }
}
export default ProductList