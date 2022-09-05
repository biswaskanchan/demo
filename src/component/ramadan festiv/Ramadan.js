import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import marry from "../../images/marry.png"
import ramadan from "../../images/ramadan.png"

function Ramadan(){
    return <Fragment>
        <Container className="mt-5 p-0">
            <Row>
                <Col className="CardBotom" lg={6} md={12} sm={12}>
                <img className="holidayImage" src={marry}/>
                </Col>

                <Col className="CardBotom" lg={6} md={12} sm={12}>
                <img className="holidayImage" src={ramadan}/>
                </Col>
            </Row>
        </Container>
    </Fragment>
}export default Ramadan;