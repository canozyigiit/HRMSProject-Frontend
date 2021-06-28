import React from 'react'
import { Formik, Form, Field } from 'formik'
import LanguageService from '../../../services/LanguageService';

export default function NewLanguageCanvas() {
    return (
        <div>
            <h4 className="title">Diller <small className="float-right"><a data-bs-toggle="offcanvas" data-bs-target="#newLanguageCanvas">Yeni Dil Ekle <span className="flaticon-right-arrow"></span></a></small></h4>

            {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

            <div class="offcanvas offcanvas-top" tabindex="-1" id="newLanguageCanvas" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Yeni Yabancı Dil Ekle</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <Formik
                        initialValues={{
                            languageName: "",
                            languageLevel: "",
                            resumeId: "",
                            

                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            let languageService = new LanguageService()
                            languageService.addLanguage(values).then()
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
                                            <label htmlFor="formGroupExampleInput1">Yabancı Dil</label>
                                            <Field type="text" className="form-control" name="languageName" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-2">
                                        <div className="my_profile_input form-group">
                                            <label htmlFor="formGroupExampleInput1">Seviye (1-5)</label>
                                            <Field type="number" className="form-control" name="languageLevel" />
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
            </div>
        </div>

    )
}
