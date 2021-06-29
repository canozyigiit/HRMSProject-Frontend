import React from 'react'
import { Formik, Form, Field } from 'formik'
import TechnologyService from '../../../services/TechnologyService'
export default function NewTechnologyCanvas() {
    return (
        <div>
        <h4 className="title">Yetenekler <small className="float-right"><a data-bs-toggle="offcanvas" data-bs-target="#newTechnologyCanvas">Yeni Yetenek Ekle <span className="flaticon-right-arrow"></span></a></small></h4>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="newTechnologyCanvas" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Yeni Teknoloji Ekle</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <Formik
                        initialValues={{
                            description: "",
                            resumeId: ""
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            let technologyService = new TechnologyService()
                            technologyService.addTechnology(values).then()
                            console.log(values);

                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                {/* TODO:KALKACAK */}
                                <div className="row" style={{'marginLeft':'100px'}} >
                                    <div className="col-md-6 col-lg-2">
                                        <div className="my_profile_input form-group">
                                            <label htmlFor="formGroupExampleInput1"> Resume ID</label>
                                            <Field className="form-control" name="resumeId" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-2">
                                        <div className="my_profile_input form-group">
                                            <label htmlFor="formGroupExampleInput1">Teknoloji</label>
                                            <Field type="text" className="form-control" name="description" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6" style={{'marginTop':'45px'}}>
                                       
                                        <button className="btn btn-lg btn-thm" type="submit" disabled={isSubmitting}>
                                            Kaydet
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div></div>
    )
}
