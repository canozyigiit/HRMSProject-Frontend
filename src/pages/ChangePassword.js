import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import UserService from '../services/UserService';
import * as Yup from "yup";
export default function ChangePassword() {
    return (
        <div class="password_change_form">
            <h4>Parola Değiştir</h4>
            <Formik
                onSubmit={(values, { setSubmitting }) => {
                    let userService = new UserService()
                    userService.changePassword(values)
                        .then((result) => console.log(result.request))
                       
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({ isSubmitting, errors }) => (
                    <Form>
                        <div className="col-md-6 col-lg-6">
                            <div className="my_profile_input form-group">
                                <label htmlFor="formGroupExampleInputDate">Eski Parolayı Giriniz</label>
                                <Field  className="form-control" name="password" />
                                <ErrorMessage name="password" component="div" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="my_profile_input form-group">
                                <label htmlFor="formGroupExampleInputDate">Yeni Parolayı Giriniz</label>
                                <Field  className="form-control" name="newPassword" />
                                <ErrorMessage name="newPassword" component="div" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="my_profile_input form-group">
                                <label htmlFor="formGroupExampleInputDate">İd</label>
                                <Field type="number" className="form-control" name="id" />
                                <ErrorMessage name="id" component="div" />
                            </div>
                        </div>
                        <button className="btn btn-lg btn-thm" type="submit" disabled={isSubmitting}>
                            Parola Değiştir
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
