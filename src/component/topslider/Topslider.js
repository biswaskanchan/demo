import React, { Fragment, useState } from 'react'
import { Col, Container, ListGroup, NavDropdown, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Logo1 from '../../images/logo1 (1).jpg';
import Logo2 from '../../images/logo2.jpg';


function Topslider (){

    
    return <Fragment>

        <Container className='p-0'>
                <Row>
                    <Col className='Left' lg={4} md={8} sm={12}>
                    <ListGroup >
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      Bags & Shoes
                      </ListGroup.Item>
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      Home, Pet & Appliances
                      </ListGroup.Item>
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      Phones & Telecom
                      </ListGroup.Item>
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      Computer, Office & Security
                      </ListGroup.Item>
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      Beauty, Health & Hair
                      </ListGroup.Item>

                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      

                          
                          <NavDropdown title="Jewelry & Watches" id="basic-nav-dropdown">

                          <NavDropdown.Item href="#action/3.1">Jewelry </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.2"> Watches</NavDropdown.Item>
                          </NavDropdown>
                         
                      </ListGroup.Item>
                      <ListGroup.Item className="catagorisItemLeftSlider" action href="">
                      

                      <NavDropdown title="Women's fashion" id="basic-nav-dropdown">

                          <NavDropdown.Item href="#action/3.1">Dress </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.2"> Shoes</NavDropdown.Item>
                          </NavDropdown>


                      </ListGroup.Item>
                      <ListGroup.Item className="catagoriViewMore" action href="">
                      View More
                      </ListGroup.Item>

                      </ListGroup>

                    </Col>

                    <Col className='Right' lg={8} md={8} sm={12}>
                        
                    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 carouserImege"
          src={Logo1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carouserImege"
          src={Logo2}
          alt="Second slide"
        />
          
      </Carousel.Item>
    </Carousel>

                    </Col>
                </Row>
        </Container>
    </Fragment>
}export default Topslider