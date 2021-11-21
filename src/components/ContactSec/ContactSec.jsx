import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ecommerceIcon from '../../asset/image/ecommerce.png';

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

    submitContactForm(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let jsonObject = {name:name, email:email, message:message}

        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)
        ).then(result => {
            alert(result);
        }).catch(error=>{
            alert("Error");
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Discuss with Us</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="mb-3">
                            <div className="serviceCard text-center">
                                <img className="icon" src="https://image.freepik.com/free-vector/home-icon-pin-deal-isolated-white_1284-48167.jpg" />
                                <h2 className="serviceName">Our Location</h2>
                                <p className="serviceDescription">
                                    {this.state.address}
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="mb-3">
                            <div className="serviceCard text-center">
                                <img className="icon" src="https://image.freepik.com/free-vector/illustration-envelope_53876-5849.jpg" />
                                <h2 className="serviceName">Email Address</h2>
                                <p className="serviceDescription">
                                    {this.state.email}
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="mb-3">
                            <div className="serviceCard text-center">
                                <img className="icon" src="https://image.flaticon.com/icons/png/128/1112/1112490.png" />
                                <h2 className="serviceName">Phone No.</h2>
                                <p className="serviceDescription">
                                    {this.state.phone}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Col lg={6} md={12} sm={12}>
                            <h1 className="serviceMainTitle text-center">Quick Connect</h1>
                            <div className="bottom"></div>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter Your Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="message" as="textarea" rows={3} />
                                </Form.Group>

                                <Button className="float-right" variant="primary" onClick={this.submitContactForm}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ContactSec
