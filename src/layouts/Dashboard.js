import React from 'react'
import Navi from './Navbar/Navi'
import Home from '../pages/Home/Home';
import Footer from './Footer/Footer';
import BottomArea from './Footer/BottomArea';
import JobAdvertList from '../components/JobAdvert/JobAdvertList'
import EmployerList from '../components/Employer/EmployerList'
import JobSeekerList from '../components/JobSeeker/JobSeekerList'
import { Route } from 'react-router';
import FooterTopArea from './Footer/FooterTopArea';
import JobAdvertDetail from '../components/JobAdvert/JobAdvertDetail';
export default function Dashboard() {
    return (
        <div>
            <Navi />
            <br/>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobAdverts" component={JobAdvertList} />
            <Route exact path="/jobAdverts/:id" component={JobAdvertDetail} />
            <Route path="/employers" component={EmployerList} />
            <Route exact path="/jobSeekers" component={JobSeekerList} />
            <FooterTopArea/>
            <Footer />
            <BottomArea />
        </div>
    )
}
