import React from 'react'
import AdminSideBar from '../components/Admin/AdminSideBar'
import { Route } from 'react-router';
import ConfirmEmployer from '../components/Admin/ConfirmEmployer';
import ConfirmJobAdvert from '../components/Admin/ConfirmJobAdvert';
import NotFoundPage from '../pages/NotFoundPage';
import { Switch } from 'react-router-dom';
import ChangePassword from '../pages/ChangePassword';
import AdminProfile from '../components/Admin/AdminProfile';
import ConfirmUpdateEmployer from '../components/Admin/ConfirmUpdateEmployer';


export default function AdminManagement() {
    return (
        <section className="cnddte_fvrt our-dashbord dashbord">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4 col-xl-3 dn-smd">
                        <AdminSideBar></AdminSideBar>
                    </div>
                    <div className="col-sm-12 col-lg-8 col-xl-9">
                    <Switch>
                        <Route exact path="/admin/confirmEmployer" component={ConfirmEmployer} />
                        <Route exact path="/admin/confirmUpdateEmployer" component={ConfirmUpdateEmployer} />
                        <Route exact path="/admin/confirmJobAdvert" component={ConfirmJobAdvert}/>
                        <Route exact path="/admin/changePassword" component={ChangePassword} />
                        <Route exact path="/admin" component={AdminProfile} />

                        <Route path="*" component={NotFoundPage}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )
}
