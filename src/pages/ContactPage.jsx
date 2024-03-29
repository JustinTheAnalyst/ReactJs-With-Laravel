import React, { Component } from 'react'
import { Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Us" />
                <PageTop pageTitle="Contact Us" />
                <ContactSec />
                <Footer />
            </Fragment>
        )
    }
}

export default ContactPage
