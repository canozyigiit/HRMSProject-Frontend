import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import GraduateService from '../../../services/GraduateService'
import { toast } from 'react-toastify'

import SchoolService from '../../../services/SchoolService'

export default function NewSchoolModal() {
    const [graduates, setGraduates] = useState([])
    // const saved = () => {
    //     toast.success(`Yeni Eğitim Bilgisi eklendi`)
    //     // setTimeout('location.reload(false)', 5000);
    // }
    useEffect(() => {
        let graduateService = new GraduateService()
        graduateService.getGraduates().then(result => setGraduates(result.data.data))
    }, [])
    return (
        <div>
            <h4 className="title">Eğitim  <small className="float-right"><a data-bs-toggle="modal" data-bs-target="#newSchoolModal">Yeni Eğitim Ekle <span className="flaticon-right-arrow"></span></a></small></h4>
            <div class="modal fade" id="newSchoolModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Yeni Eğitim Ekle</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Formik
                                initialValues={{
                                    schoolName: "",
                                    schoolDepartment: "",
                                    startedDate: "",
                                    resumeId: "",
                                    endedDate: "",
                                    graduateId:""

                                }}

                                onSubmit={(values, { setSubmitting }) => {
                                    let schoolService = new SchoolService
                                    schoolService.addSchool(values).then()
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
                                                    <label htmlFor="formGroupExampleInput1">Okul Adı</label>
                                                    <Field type="text" className="form-control" name="schoolName" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-12">
                                                <div className="my_profile_input form-group">
                                                    <label htmlFor="formGroupExampleInput1">Departman</label>
                                                    <Field type="text" className="form-control" name="schoolDepartment" />
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
                                            <div className="col-md-6 col-lg-12">
                                                <div className="my_profile_select_box form-group">
                                                    <label htmlFor="exampleFormControlInput9">Derece</label><br />
                                                    <Field name="graduateId" as="select" className="form-select form-select-lg ">
                                                        <option placeholder="Pozisyon Seçiniz" defaultValue>Derece Seçiniz</option>
                                                        {graduates.map(graduate => (
                                                            <option key={graduate.id} value={graduate.id}>{graduate.description}</option>
                                                        ))}
                                                    </Field>
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
