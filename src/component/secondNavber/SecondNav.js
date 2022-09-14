//import { Container } from "@mui/system";
import React, { Fragment } from "react";
import "../../asent/Main.css"
import { Fade, Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
//import { color } from "@mui/system";

//import SearchIcon from '@mui/icons-material/Search';

//import DropdownButton from 'react-bootstrap/DropdownButton';

function SecondNav() {


  const [open, setOpen] = useState(true);
  const [onepIter, stOpenItem] = useState(false);
  const [onepIter2, stOpenItem2] = useState(false);
  const [onepIter3, stOpenItem3] = useState(false);



  return <Fragment>

    <div className="secondNavcolor">

      <Navbar bg="light" expand="lg">
        <Container className="p-0 m-0">
          <div>
            <Button className="buttonNav"

              onClick={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}

            >
              <MenuOpenIcon className="catagoriIconLeft" /> Categories <ArrowDropDownIcon className="catagoriIconRight" />
            </Button>

            <Fade in={open}>
              <ul id="example-fade-text" className="catagoriOption">
                <li className="catagoriOptionLi"> Bags & Shoes </li>
                <li className="catagoriOptionLi"> Home, Pet & Appliances</li>
                <li className="catagoriOptionLi"> Phones & Telecom </li>
                <li className="catagoriOptionLi"> Computer, Office & Security </li>
                <li className="catagoriOptionLi"> Beauty, Health & Hair </li>

                <div onClick={(e) => {
                  stOpenItem(!onepIter)
                }}>
                  <li className="catagoriOptionLi"> Jewelry & Watches <ArrowDropDownIcon /></li>
                </div>
                {
                  onepIter && (
                    <div className="catagoriMaindrop">
                      <div className="catagoriDropdown">Jewelry</div>
                      <div className="catagoriDropdown">Watches</div>
                    </div>
                  )
                }

                <div onClick={(e) => {
                  stOpenItem2(!onepIter2)
                }}>
                  <li className="catagoriOptionLi"> Women's fashion <ArrowDropDownIcon /> </li>
                </div>
                {
                  onepIter2 && (
                    <div className="catagoriMaindrop">
                      <div className="catagoriDropdown">Women's</div>
                      <div className="catagoriDropdown">fashion</div>
                    </div>
                  )
                }

                <li className="catagoriOptionLi"> Outdoor Fun & Sports </li>
                <li className="catagoriOptionLi"> Men's fashion </li>
                <li className="catagoriOptionLi"> Toys , Kids & Babies </li>
                <li className="catagoriOptionLi"> Home Improvement & Tools </li>
              </ul>
            </Fade>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="secondnev-side ">
              <Nav.Link className="second-nevhover" href="#home">Home</Nav.Link>
              <Nav.Link className="second-nevhover" href="#All Brands">All Brands</Nav.Link>
              <Nav.Link className="second-nevhover" href="#Discounted">Discounted Products</Nav.Link>
              <Nav.Link className="second-nevhover" href="#All">All Sellers</Nav.Link>
              <Nav.Link href="">
                <div onClick={(e) => {
                  stOpenItem3(!onepIter3)
                }}>
                  <li className="second-nevhover"> Seller Zone <ArrowDropDownIcon /> </li>
                </div>
                {
                  onepIter3 && (
                    <div className="catagorimenuMaindrop">
                      <div className="catagorimenuDropdown">Become a Seller</div>
                      <div className="catagorimenuDropdown">Seller Login</div>
                    </div>
                  )
                }
              </Nav.Link>




            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>








  </Fragment>

} export default SecondNav