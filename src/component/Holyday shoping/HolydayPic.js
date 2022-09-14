import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import holiday from "../../images/holyday.png"

function HolydayPic() {
    return <Fragment>
        <Container className="mt-5 p-0">

            <Row>
                <a className="cardLink" href="#">
                    <img className="holidayImage" src={holiday} />
                </a>
            </Row>

        </Container>
    </Fragment>
} export default HolydayPic;