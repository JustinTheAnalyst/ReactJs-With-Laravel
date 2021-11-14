import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

class ClientReview extends Component {
    render() {

        var settings = {
            autoPlaySpeed:3000,
            autoPlay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows:false,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>
                <Container fluid={true} className="siderBack text-center">
                    <h1 className="reviewMainTitle">TESTIMONIAL</h1>
                    <div className="reviewBottom"></div>
                    
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg" />
                                    <h2 className="reviewName">Kazi</h2>
                                    <p className="reviewDescription">
                                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                                    </p>
                                </Col>

                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://image.freepik.com/free-photo/portrait-african-american-man_23-2149072214.jpg" />
                                    <h2 className="reviewName">Jack Ma</h2>
                                    <p className="reviewDescription">
                                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                                    </p>
                                </Col>

                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://image.freepik.com/free-photo/beautiful-young-asian-woman-with-clean-fresh-skin-face-care-facial-treatment-cosmetology-beauty-healthy-skin-cosmetic-concept_65293-2366.jpg" />
                                    <h2 className="reviewName">Jane Sampson</h2>
                                    <p className="reviewDescription">
                                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default ClientReview
