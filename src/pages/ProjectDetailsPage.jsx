import React, { Component, Fragment } from 'react'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'

class ProjectDetailsPage extends Component {
    
    constructor({match}){
        super();
        this.state = {
            projectPassedID:match.params.projectID
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }
    
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details" />
                <PageTop pageTitle="Project Details" />
                <ProjectDetails pid={this.state.projectPassedID} />
                <Footer />
            </Fragment>
        )
    }
}

export default ProjectDetailsPage
