import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class AboutDescription extends Component {

    constructor(){
        super();
        this.state = {
            aboutdescription:"...",
            mission:"...",
            vission:"..."
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result => {
            this.setState({aboutdescription:result[0]['about_me']});
        });
        RestClient.GetRequest(AppUrl.Information).then(result => {
            this.setState({mission:result[0]['mission']});
        });
        RestClient.GetRequest(AppUrl.Information).then(result => {
            this.setState({vission:result[0]['vission']});
        });
    }

    render() {

        

        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="serviceName">Who I Am</h1>
                            <hr />
                            <p className="serviceDescription">
                            { ReactHtmlParser(this.state.aboutdescription) }
                            </p>

                            <br></br><br></br>
                            
                            <h1 className="serviceName">Our Mission</h1>
                            <hr />
                            <p className="serviceDescription">
                            { ReactHtmlParser(this.state.mission) }
                            </p>

                            <br></br><br></br>

                            <h1 className="serviceName">Our Vision</h1>
                            <hr />
                            <p className="serviceDescription">
                            { ReactHtmlParser(this.state.vission) }
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutDescription
