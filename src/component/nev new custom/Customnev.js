import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Customnev (){
    return <Fragment>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> All Brands </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> Discounted Products </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> All Sellers </Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> Seller Zone </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
}
export default Customnev