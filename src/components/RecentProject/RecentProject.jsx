import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class RecentProject extends Component {
    
    
    
    render() {

        
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name 1</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://image.freepik.com/free-vector/webinar-landing-page-template_52683-53604.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name 2</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/webinar-landing-page-template_52683-51750.jpg" />
                                <Card.Body>
                                    <Card.Title className="serviceName">Project Name 3</Card.Title>
                                    <Card.Text className="serviceDescription">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">View More</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default RecentProject
