import React, { Fragment } from "react";
import "../../asent/Main.css"
import { Col, Container, Row, NavDropdown, Nav } from "react-bootstrap";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import nebLogo from "../../images/faq.png"




function FirstNevnew() {





    return <Fragment>
        <Container className="p-0" fluid={true}>
            <Row>
                <Col className="firstNewnev">
                    <img className="firstNavPicture" src={nebLogo} alt="logo" />
                    <h4 className="firstNevHeading">HK MART</h4>

                    <form action="">
                        <input className="searchExample" type="text" placeholder="Search....." />
                        <button className="searchButton" ><SearchIcon /></button>
                    </form>

                    <div className="NevLeft">



                        <div className="secondNevIcon dropdown" >

                            <GroupAddIcon className="firstIconcolor " />
                            <div class="dropdown-content">

                                <a href="#"><LoginIcon /> Sign In</a>
                                <a href="#"><AccountCircleIcon /> Sign Up</a>
                            </div>
                        </div>


                        <div className="secondNevIcon">
                            <FavoriteIcon className="firstIconcolor" />
                            <span className="secondNevCart"> 9</span>
                        </div>

                        <div className="secondNevIcon">
                            <AddShoppingCartIcon className="firstIconcolor" />
                            <span className="secondNevCart">4</span>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    </Fragment>
} export default FirstNevnew