import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TermsAndCondtions from '../components/TermsAndConditions/TermsAndCondtions'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class TermsAndConditionsPage extends Component {
    
    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms And Conditions" />
                <PageTop pageTitle="Terms And Conditions" />
                <TermsAndCondtions />
                <Footer />
            </Fragment>
        )
    }
}

export default TermsAndConditionsPage
