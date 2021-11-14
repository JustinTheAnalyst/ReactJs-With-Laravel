import React, { Component } from 'react'
import { Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'

class AllCoursesPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="All Courses" />
                <PageTop pageTitle="All Courses" />
                <AllCourses />
                <Footer />
            </Fragment>
        )
    }
}

export default AllCoursesPage
