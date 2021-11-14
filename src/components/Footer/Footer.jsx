import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-center">
                            <h2 className="footerName">Follow Us</h2>
                            <div className="social-container">
                                <a className="facebook social" href="#" >
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a className="youtube social" href="#" >
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a className="twitter social" href="#" >
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Address</h2>
                            <p className="footerDescription">
                                47A Galloway Street, Hamilton East, Hamilton 3216, NZ<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : justin.tys@hotmail.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : +64 20 4134 6305<br></br>

                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Information</h2>
                            <Link className="footerLink" to="/about">About Me</Link><br></br>
                            <Link className="footerLink" to="/about">Company Profile</Link><br></br>
                            <Link className="footerLink" to="/contact">Contact Us</Link><br></br>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy</h2>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br></br>
                            <Link className="footerLink" to="/terms-and-conditions">Terms &amp; Conditions</Link><br></br>
                            <Link className="footerLink" to="/private-policy">Private Policy</Link><br></br>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="copyrightSection">
                    <a className="copyrightLink" href="#">&copy; Copyright 2021 by Justin. All Rights Reserved.</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer
