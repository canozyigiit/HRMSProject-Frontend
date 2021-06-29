import React from 'react'
import { Formik, Form, Field } from 'formik';

import SystemPersonnelService from '../../services/SystemPersonnelService'
export default function AdminProfile() {


    return (
        <div className="my_profile_form_area employer_profile">
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="fz20 mb20">Profil</h4>
                </div>

                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        id:"",
                        password:""
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        let systemPersonnelService = new SystemPersonnelService()
                        systemPersonnelService.update(values).then()
                        console.log(values);

                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="col-md-6 col-lg-6">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1">ID</label>
                                    <Field  className="form-control" name="id" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1">İsim</label>
                                    <Field type="text" className="form-control" name="firstName" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1">Soy İsim</label>
                                    <Field type="text" className="form-control" name="lastName" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="exampleFormControlInput1">E-Posta</label>
                                    <Field type="text" className="form-control" name="email" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="exampleFormControlInput1">Parola</label>
                                    <Field type="password" className="form-control" name="password" />
                                </div>
                            </div>
                       
                            <div className="col-lg-4">
                                <div className="my_profile_input">
                                    <button className="btn btn-lg btn-thm" type="submit" disabled={isSubmitting}>
                                        Kaydet
                                    </button>
                                </div>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
