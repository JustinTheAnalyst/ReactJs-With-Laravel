import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageOne from '../../asset/image/page1.png';
import pageTwo from '../../asset/image/page2.png';
import pageThree from '../../asset/image/page3.png';
import imgOne from '../../asset/image/19.png';
import imgTwo from '../../asset/image/20.png';
import imgThree from '../../asset/image/21.png';

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <div className="intro-area--top">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="section-title text-center">
                                    <div className="intro-area-inner">
                                        <h6 className="sub-title double-line">WELCOME</h6>
                                        <h2 className="mainTitle">An Example<br></br>Learning Community</h2>


                                        <Container className="text-center mt-5">
                                            <Row>
                                                <Col lg={4} md={6} sm={12} className="pb-3">
                                                    <img src={pageOne} />
                                                    <h1 className="serviceName">Easy As It Gets</h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>

                                                <Col lg={4} md={6} sm={12} className="pb-3">
                                                    <img src={pageTwo} />
                                                    <h1 className="serviceName">Teach The Way You Want </h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>

                                                <Col lg={4} md={6} sm={12} className="pb-3">
                                                    <img src={pageThree} />
                                                    <h1 className="serviceName">The small matter of getting</h1>
                                                    <p className="serviceDescription">Lorem ipsum dolor</p>
                                                </Col>
                                            </Row>

                                            {/* Intro Footer Start */}
                                            <Row className="intro-footer bg-base text-center mt-5">
                                            <Col lg={4} md={6} sm={12}>
                                                <Row className="mb-3">
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgOne} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro text-center">Ecommerce</h5>
                                                        <p className="serviceDscription text-center">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                                <Row className="mb-3">
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgTwo} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro text-center">Development</h5>
                                                        <p className="serviceDscription text-center">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col lg={4} md={6} sm={12}>
                                                <Row>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <img className="sideImg" src={imgThree} />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={12}>
                                                        <h5 className="homeIntro text-center">Web Design</h5>
                                                        <p className="serviceDscription text-center">Lorem ipsum dolor</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        </Container>        
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Welcome
