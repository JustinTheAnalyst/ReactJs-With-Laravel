import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Courses extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData:result});
        });
    }

    render() {

        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={6} md={12} sm={12}>
            <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                    <img className="courseImg" src={myList.small_img} />
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">{myList.short_title}</h5>
                    <p className="text-justify serviceDescription">
                    {myList.short_description}
                    </p>
                    <Link className="courseViewMore float-left" to="/course-details">View Details</Link>
                </Col>
            </Row>
        </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">MY COURSES</h1>
                <div className="bottom"></div>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Courses
