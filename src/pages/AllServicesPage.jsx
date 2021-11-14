import React, { Component, Fragment } from 'react'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import ContactSec from '../components/ContactSec/ContactSec'

class AllServicesPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="All Services" />
                <PageTop pageTitle="All Services" />
                <Services />
                <ContactSec />
                <Footer />
            </Fragment>
        )
    }
}

export default AllServicesPage
