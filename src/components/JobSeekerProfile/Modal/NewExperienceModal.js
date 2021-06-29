import React from 'react'
import { Formik, Form, Field } from 'formik'
import JobExperienceService from '../../../services/JobExperienceService'

export default function NewExperienceModal() {
    return (
        <div>
        <h4 className="title">İş Deneyimi  <small className="float-right"><a data-bs-toggle="modal" data-bs-target="#newJobExperienceModal">Yeni İş Deneyimi Ekle <span className="flaticon-right-arrow"></span></a></small></h4>
        <div class="modal fade" id="newJobExperienceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Yeni İş Deneyimi Ekle</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <Formik
                                initialValues={{
                                    companyName: "",
                                    startedDate: "",
                                    resumeId: "",
                                    endedDate: "",
                                    position:""

                                }}

                                onSubmit={(values, { setSubmitting }) => {
                                    let jobExperienceService = new JobExperienceService()
                                    jobExperienceService.addJobExperience(values).then()
                                    console.log(values);

                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>

                                        <div className="col-lg-12">
                                            <div className="my_profile_thumb_edit"></div>
                                        </div>
                                        {/* TODO:KALKACAK */}
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4"> 
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1"> Resume ID</label>
                                                    <Field className="form-control" name="resumeId" />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-8">
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1">Şirket Adı</label>
                                                    <Field type="text" className="form-control" name="companyName" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-8">
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1">Pozisyon</label>
                                                    <Field type="text" className="form-control" name="position" />
                                                </div>
                                            </div>
                                           
                                            <div className="col-md-6 col-lg-6">
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1">Başlangıç Tarihi</label>
                                                    <Field type="date" className="form-control" name="startedDate" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1">Bitiş Tarihi</label>
                                                    <Field type="date" className="form-control" name="endedDate" />
                                                </div>
                                            </div>
                                            




                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                                <div className="my_profile_input">
                                                    <button className="btn btn-lg btn-thm" type="submit"  disabled={isSubmitting}>
                                                        Kaydet
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
