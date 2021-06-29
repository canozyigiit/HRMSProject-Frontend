import React from 'react'
import JobSeekerSideBar from '../components/JobSeekerProfile/JobSeekerSideBar'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import MyResume from '../components/JobSeekerProfile/MyResume';
import JobSeekerProfil from '../components/JobSeekerProfile/JobSeekerProfil';



export default function JobSeekerManagement() {
    return (
        <section className="cnddte_fvrt our-dashbord dashbord">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4 col-xl-3 dn-smd">
                        <JobSeekerSideBar></JobSeekerSideBar>
                    </div>
                    <div className="col-sm-12 col-lg-8 col-xl-9">
                   
                        <Switch>
                        <Route exact path="/jobSeeker/profil" component={JobSeekerProfil}/>
                        <Route exact path="/jobSeeker/resume" component={MyResume}/>
                            <Route path="*" component={NotFoundPage}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )
}
