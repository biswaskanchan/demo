import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import delivery from "../../images/delivery.png"
import money from "../../images/money.png"
import payment from "../../images/Payment.png"
import genuine from "../../images/Genuine.png"

function TramsCondition () {
    return <Fragment>
        <Container className="mt-5 p-0 bagandShoseBorder">
            <Row>
                <Col lg={3} md={4} sm={6}>
                <div className="tramsConditionClom">
                    <img src={delivery}/>
                    <h3 className="tramsConditionheading">Fast Delivery all accross the country</h3>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                <div className="tramsConditionClom">
                    <img src={payment}/>
                    <h3 className="tramsConditionheading">Safe Payment</h3>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                <div className="tramsConditionClom">
                    <img src={money}/>
                    <h3 className="tramsConditionheading">7 Days Return Policy</h3>
                </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                <div className="tramsConditionClom">
                    <img src={genuine}/>
                    <h3 className="tramsConditionheading">100% Authentic Products</h3>
                </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
}export default TramsCondition