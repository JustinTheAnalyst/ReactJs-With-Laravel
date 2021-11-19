import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
            video_description:'',
            video_url:''
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeVideo).then(results=>{
            this.setState({
                video_description: results[0]['video_description'],
                video_url: results[0]['video_url']
            })
        })
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR VIDEOS</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="videoText">
                            <p className="serviceDescription text-justify">
                            {this.state.video_description}
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="videoCard">
                            <FontAwesomeIcon onClick={this.modalOpen} className="iconVideo" icon={faVideoSlash} />
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                    <ReactPlayer url={this.state.video_url} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>





            </Fragment>
        )
    }
}

export default Video
