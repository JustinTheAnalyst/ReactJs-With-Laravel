import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';
class TermsAndCondtions extends Component {

    constructor(){
        super();
        this.state = {
            termsdescription:"..."
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({termsdescription:result[0]['terms']});
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Terms And Conditions</h1>
                            <hr />
                            <p className="serviceDescription">
                            { ReactHtmlParser(this.state.termsdescription)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default TermsAndCondtions
