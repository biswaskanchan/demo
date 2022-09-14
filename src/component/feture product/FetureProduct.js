import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import Slider from "react-slick";
import Shoes from "../../images/1.jpg";
import Laptop from "../../images/top5.jpg"
import { color } from "@mui/system";
import { Arrowb } from "./Arrow";

function FetureProduct() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: .25,
    };


    return <Fragment>
        <Container className='mt-3 p-0'>
            <h1 className='fetureProductHeading'><UpcomingIcon className="upcoming-icon" /> Featured Products</h1>
            <Row className="fetureProductRow">
                <Arrowb>
                    <Slider {...settings}>
                        <div>
                            <Container>
                                <Row>
                                    <Col className="cardBox " sm={12} md={4} lg={3}>

                                        <a className="cardLink " href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Shoes} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Exclusive & Fashionable Suit For Men</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </Col>


                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Laptop} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Women's long-sleeve lightweight french terry fleece quarter-zip top</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>

                                        </a>
                                    </Col>

                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Shoes} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Women's long-sleeve lightweight french terry fleece quarter-zip top</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>
                                        </a>

                                    </Col>

                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Laptop} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Latest Cool headphone with Bluetooth version 5.0</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>

                                        </a>

                                    </Col>



                                </Row>
                            </Container>

                        </div>

                        <div>

                            <Container>
                                <Row>
                                    <Col className="cardBox " sm={12} md={4} lg={3}>

                                        <a className="cardLink " href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Shoes} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Exclusive & Fashionable Suit For Men</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </Col>


                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Laptop} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Women's long-sleeve lightweight french terry fleece quarter-zip top</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>

                                        </a>
                                    </Col>

                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Shoes} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Women's long-sleeve lightweight french terry fleece quarter-zip top</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>
                                        </a>

                                    </Col>

                                    <Col className="cardBox" sm={12} md={4} lg={3}>

                                        <a className="cardLink" href="#">
                                            <Card className="cardAnimation" style={{ width: '14rem' }}>
                                                <Card.Img className="cardImage" variant="top" src={Laptop} />
                                                <Card.Body>
                                                    <Card.Title className="cardTitleHeadingmax cardLatestHeading">Latest Cool headphone with Bluetooth version 5.0</Card.Title>
                                                    <Rating name="size-small" defaultValue={3} size="small" />

                                                    <div>

                                                        <del className="sliderDeletprice"> $500.0 </del>

                                                        <p className="cardPrice"> $450.0 </p>
                                                    </div>

                                                    <Button variant="primary">Quice view</Button>
                                                </Card.Body>
                                            </Card>

                                        </a>

                                    </Col>



                                </Row>
                            </Container>


                        </div>


                    </Slider>
                </Arrowb>

            </Row>
        </Container>
    </Fragment>
}
export default FetureProduct;