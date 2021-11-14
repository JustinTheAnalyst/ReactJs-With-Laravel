import React, { Component } from 'react'
import { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import PrivateDescription from '../components/PrivateDescription/PrivateDescription'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class PrivatePolicyPage extends Component {
    
    componentDidMount() {
        window.scroll(0,0)
    }
    
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Private Policy" />
                <PageTop pageTitle="Private Policy" />
                <PrivateDescription />
                <Footer />
            </Fragment>
        )
    }
}

export default PrivatePolicyPage
