import React from 'react'
import Navi from './Navbar/Navi'
import Home from '../pages/Home/Home';
import Footer from './Footer/Footer';
import JobAdvertList from '../components/JobAdvert/JobAdvertList'
import EmployerList from '../components/Employer/EmployerList'
import JobSeekerList from '../components/JobSeeker/JobSeekerList'
import { Route } from 'react-router';
import FooterTopArea from './Footer/FooterTopArea';
import JobAdvertDetail from '../components/JobAdvert/JobAdvertDetail';
import EmployerDetail from '../components/Employer/EmployerDetail';
import JobSeekerDetail from '../components/JobSeeker/JobSeekerDetail';
import CityAdd from '../pages/CityAdd';
import PostJobAdd from '../pages/PostJobAdd';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import { Switch } from 'react-router-dom';
import BottomArea from './Footer/BottomArea';
import AdminManagement from './AdminManagement';
import { ToastContainer } from 'react-toastify';
import JobSeekerManagement from './JobSeekerManagement';
import MyResume from '../components/JobSeekerProfile/MyResume';
export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Navi />
            <br />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/jobAdverts" component={JobAdvertList} />
                <Route exact path="/jobAdverts/:jobAdvertId" component={JobAdvertDetail} />

                <Route exact path="/employers" component={EmployerList} />
                <Route exact path="/employers/:employerId" component={EmployerDetail} />
                <Route exact path="/postJob" component={PostJobAdd} />

                <Route exact path="/jobSeekers" component={JobSeekerList} />
                <Route exact path="/jobSeekers/:jobSeekerId" component={JobSeekerDetail} />
                <Route  path="/jobSeeker" component={JobSeekerManagement} />

                <Route path="/admin" component={AdminManagement}></Route>

                <Route exact path="/addCity" component={CityAdd} />
                <Route exact path="/login" component={Login} />




                <Route path="*" component={NotFoundPage}></Route>
            </Switch>

            <FooterTopArea />
            <Footer />

            <BottomArea />
        </div>

    )
}
