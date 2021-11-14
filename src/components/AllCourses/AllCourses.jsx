import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">MY COURSES</h1>
                <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/discussing-video-course_1098-13061.jpg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 1</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/smiling-woman-having-break-university_329181-12563.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 2</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/discussing-video-course_1098-13061.jpg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 1</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/smiling-woman-having-break-university_329181-12563.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 2</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://img.freepik.com/free-photo/smiling-girl-studying-home_329181-18968.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 3</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 4</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://img.freepik.com/free-photo/smiling-girl-studying-home_329181-18968.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 3</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>

                                <Col lg={6} md={6} sm={12} className="p-2">
                                    <img className="courseImg" src="https://image.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg" />

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify serviceName">Course 4</h5>
                                    <p className="text-justify serviceDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllCourses
