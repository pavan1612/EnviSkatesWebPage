import React , {Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
class ProductList extends Component{

    render(){
        const image1 = require("../Images/ele_bike1.jpg")
        const image2 = require("../Images/ele_bike2.jpg")
        const image3 = require("../Images/ele_ska1.jpg")
        const image4 = require("../Images/ele_ska2.jpg")
        return (
<Container style ={{background: '#f0f0f0'}}>

  <Row style={{marginTop: 30,marginBottom:30}}>
    <Col xs={1} md={2}></Col>
    <Col xs={1} md={8}>
    <Card bg="dark" text="white" >
<Card.Img src={image1} alt="Card image" style ={{
    width:  '40%',
    marginLeft: '30%',
    marginTop: '3%', 
    display: 'flex', justifyContent: 'center'}} />
    <Card.Header>Envi Bicycle</Card.Header>
    <Card.Body>
      <Card.Title>Skates Electric  Bicycle</Card.Title>
      <Card.Text>
      Looking for a tough, versatile bike at an affordable price? The MTB Sport will get you there whether you're on a daily ride to Uni or a weekend adventure on the trails.
      </Card.Text>
      <Card.Text>
          Price: $1000
      </Card.Text>
      <Button  href= 'https://www.99bikes.com.au/bikes/electric'  style ={{marginLeft: '90%'}} variant="outline-success">Buy </Button>
    </Card.Body>
  </Card>
  </Col>
    <Col xs={1} md={4}></Col>
  </Row>
  <Row style={{marginTop: 15,marginBottom:15}}>
    <Col xs={1} md={2}></Col>
    <Col xs={1} md={8}>
    <Card bg="dark" text="white" >
<Card.Img src={image2} alt="Card image" style ={{
    width:  '40%',
    marginLeft: '30%',
    marginTop: '3%',
    display: 'flex', justifyContent: 'center'}} />
    <Card.Header>Envi Bicycle</Card.Header>
    <Card.Body>
      <Card.Title>Envi Bicycle</Card.Title>
      <Card.Text>
      Looking for a tough, versatile bike at an affordable price? The MTB Sport will get you there whether you're on a daily ride to Uni or a weekend adventure on the trails.
      </Card.Text>
      <Card.Text>
          Price: $1000
      </Card.Text>
      <Button  href= 'https://www.99bikes.com.au/bikes/electric'  style ={{marginLeft: '90%'}} variant="outline-success">Buy </Button>
    </Card.Body>
  </Card>
  </Col>
    <Col xs={1} md={4}></Col>
  </Row>
  <Row style={{marginTop: 15,marginBottom:15}}>
    <Col xs={1} md={2}></Col>
    <Col xs={1} md={8}>
    <Card bg="dark" text="white" >
<Card.Img src={image3} alt="Card image" style ={{
    width:  '40%',
    marginLeft: '30%',
    marginTop: '3%',
    display: 'flex', justifyContent: 'center'}} />
    <Card.Header>Electric Skateboards</Card.Header>
    <Card.Body>
      <Card.Title>Skates Bamboo Skateboards</Card.Title>
      <Card.Text>
      Inspired by the build quality, performance and superior comfort of a classic muscle car, the Bamboo GTR marries the best features of old-school deck craftsmanship with the latest technology to produce the ultimate fun machine. Pimped with our newly forged aluminium â€˜Super Carveâ€™ trucks for the ultimate riding experience, no compromise has been made when it comes to strength, durability and ride quality.
      </Card.Text>
      <Card.Text>
          Price: $1000
      </Card.Text>
      <Button  href= 'https://www.evolveskateboards.com.au/pages/all-series'  style ={{marginLeft: '90%'}} variant="outline-success">Buy </Button>
    </Card.Body>
  </Card>
  </Col>
    <Col xs={1} md={4}></Col>
  </Row>
  <Row style={{marginTop: 15,marginBottom:15}}>
    <Col xs={1} md={2}></Col>
    <Col xs={1} md={8}>
    <Card bg="dark" text="white" >
<Card.Img src={image4} alt="Card image" style ={{
    width:  '40%',
    marginLeft: '30%',
    marginTop: '3%',
    display: 'flex', justifyContent: 'center'}} />
    <Card.Header>Electric Skateboards</Card.Header>
    <Card.Body>
      <Card.Title>SEnvi Skateboards</Card.Title>
      <Card.Text>
      Inspired by the build quality, performance and superior comfort of a classic muscle car, the Bamboo GTR marries the best features of old-school deck craftsmanship with the latest technology to produce the ultimate fun machine. Pimped with our newly forged aluminium â€˜Super Carveâ€™ trucks for the ultimate riding experience, no compromise has been made when it comes to strength, durability and ride quality.
      </Card.Text>
      <Card.Text>
          Price: $1000
      </Card.Text>
      <Button href= 'https://www.evolveskateboards.com.au/pages/all-series' style ={{marginLeft: '90%'}} variant="outline-success">Buy </Button>
    </Card.Body>
  </Card>
  </Col>
    <Col xs={1} md={4}></Col>
  </Row>
</Container>



        )
    }
}
export default ProductList