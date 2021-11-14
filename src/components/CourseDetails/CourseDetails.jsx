import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <h1 className="courseDetailsText">Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs</h1>
                            <img className="courseDetailsImg" src="https://solverwp.com/demo/html/edumint/assets/img/course/9.png" />
                            
                            <p className="courseDescription">
                            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. 
                            <br></br><br></br>
                            Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! 
                            <br></br><br></br>
                            "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.    
                            </p>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="widget_feature">
                                <h4 class="widget-title">Course Features</h4>
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faUser} /><span>Enrolled :</span> 1200 students</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClock} /><span>Duration :</span> 2 hours</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClipboard} /><span>Lectures :</span> 8</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClone} /><span>Categories:</span> Technology</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faTags} /><span>Tags:</span> Android, JavaScript</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /><span>Instructor:</span> Ethan Dean</li>
                                </ul>
                                <div class="price-wrap text-center">
                                    <h5>Price:<span>$54.00</span></h5>
                                    <Button className="btn-radius" variant="warning">ENROLL COURSE</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="widget_feature">
                                <h1 className="courseDetailsText">Skill You Need</h1>
                                <hr />
                                <ul>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faUser} /><span>Enrolled :</span> 1200 students</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClock} /><span>Duration :</span> 2 hours</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClipboard} /><span>Lectures :</span> 8</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faClone} /><span>Categories:</span> Technology</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faTags} /><span>Tags:</span> Android, JavaScript</li>
                                    <li><FontAwesomeIcon className="iconBullet" icon={faCheckSquare} /><span>Instructor:</span> Ethan Dean</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default CourseDetails
