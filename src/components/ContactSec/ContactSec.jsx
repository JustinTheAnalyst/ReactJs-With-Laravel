import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class ContactSec extends Component {

    constructor(){
        super();
        this.state = {
            address:'...',
            email:'...',
            phone:'...'
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.FooterData).then(results=>{
            this.setState({
                address: results[0]['address'],
                email: results[0]['email'],
                phone: results[0]['phone']
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1>Discuss with Us</h1>
                            <p className="serviceDescription">
                                {this.state.address}<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : {this.state.phone}<br></br>

                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSec
