import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
class ClientReview extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ClientView).then(result=>{
            this.setState({myData:result});
        });
    }

    render() {

        var settings = {
            autoPlaySpeed:3000,
            autoPlay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows:false,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                breakpoint: 600,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <div>
            <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                    <img className="circleImg" src={myList.client_img} />
                    <h2 className="reviewName">{myList.client_title}</h2>
                    <p className="reviewDescription">
                    {myList.client_description}
                    </p>
                </Col>

            </Row>
        </div>
        })

        return (
            <Fragment>
                <Container fluid={true} className="siderBack text-center">
                    <h1 className="reviewMainTitle">TESTIMONIAL</h1>
                    <div className="reviewBottom"></div>
                    
                    <Slider {...settings}>
                        {myView}
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}

export default ClientReview
