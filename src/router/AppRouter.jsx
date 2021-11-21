import React, { Component } from 'react'
import { Fragment } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AllCoursesPage from '../pages/AllCoursesPage';
import AllServicesPage from '../pages/AllServicesPage';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import RefundPage from '../pages/RefundPage';
import TermsAndConditionsPage from '../pages/TermsAndConditionsPage';
import PrivatePolicyPage from '../pages/PrivatePolicyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={AllServicesPage} />
                    <Route exact path="/course" component={AllCoursesPage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contact" component={ContactPage} />

                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/terms-and-conditions" component={TermsAndConditionsPage} />
                    <Route exact path="/private-policy" component={PrivatePolicyPage} />

                    <Route exact path="/project-details/:projectID" component={ProjectDetailsPage} />
                    <Route exact path="/course-details" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        )
    }
}

export default AppRouter
