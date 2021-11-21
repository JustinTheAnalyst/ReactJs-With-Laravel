import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class AllProjects extends Component {

    constructor(){
        super();
        this.state = {
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectActive).then(result =>{
            this.setState({myData:result});
        })
    }

    render() {

        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={6} sm={12} className="p-2">
            <Card className="projectCard">
                <Card.Img variant="top" src={myList.img_one} />
                <Card.Body>
                    <Card.Title className="serviceName">{myList.project_name}</Card.Title>
                    <Card.Text className="serviceDescription">
                    {myList.project_description}
                    </Card.Text>
                    <Button variant="primary"><Link className="link-style" to={"/project-details/"+myList.id}>View More</Link></Button>
                </Card.Body>
            </Card>
        </Col>
        });

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <div className="bottom"></div>
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllProjects
