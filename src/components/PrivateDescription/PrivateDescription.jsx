import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
class PrivateDescription extends Component {

    constructor(){
        super();
        this.state = {
            privatedescription:"..."
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({privatedescription:result[0]['privacy']});
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Private Policy</h1>
                            <hr />
                            <p className="serviceDescription">
                            { ReactHtmlParser(this.state.privatedescription)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default PrivateDescription
