import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import projectDetails from '../../asset/image/pdetails.png';
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

class ProjectDetails extends Component {

    constructor(props){
        super();
        this.state={
            myProjectID:props.pid
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="about-thumb-wrap after-shape">
                                <img className="projectDetailsImg" src={projectDetails} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="mt-5">
                            <div className="project-details">
                                <h1 className="projectDetailsText">{this.state.myProjectID}</h1>
                                <p className="detailsName">
                                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
                                </p>

                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Requirement Gatherings</p>
                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Requirement Gatherings</p>
                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Requirement Gatherings</p>
                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /> Requirement Gatherings</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ProjectDetails
