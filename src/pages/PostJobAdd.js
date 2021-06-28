import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import JobAdvertService from '../services/JobAdvertService';
import JobTypeService from '../services/JobTypeService';
import JobWorkSpaceTypeService from '../services/JobWorkSpaceTypeService';
import CityService from '../services/CityService';
import JobPositionService from '../services/JobPositionService';
import * as Yup from 'yup';


export default function PostJobAdd() {
    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [jobTypes, setJobTypes] = useState([])
    const [jobWorkSpaceTypes, setJobWorkSpaceTypes] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))

        let jobTypeService = new JobTypeService();
        jobTypeService.getJobTypes().then(result => setJobTypes(result.data.data))

        let jobWorkSpaceTypeService = new JobWorkSpaceTypeService();
        jobWorkSpaceTypeService.getJobWorkSpaceTypes().then(result => setJobWorkSpaceTypes(result.data.data))

    }, [])
    // const validationSchema = Yup.object().shape({
    //     description: Yup.string().required('Zorunlu Alan'),
    //     openPositionCount: Yup.number().required('Zorunlu Alan'),
    //     employerId: Yup.number().required('Zorunlu Alan').nullable(),
    //     cityId: Yup.string().required("Zorunlu Alan").nullable(),
    //     deadLine: Yup.date().required("Zorunlu Alan").nullable(),
    //     jobPositionId: Yup.string().required("Zorunlu Alan").nullable(),
    //     jobTypeId: Yup.string().required("Zorunlu Alan").nullable(),
    //     jobWorkSpaceTypeId: Yup.string().required("Zorunlu Alan").nullable(),
    // })
    
    return (
        <div>
            <section className="our-dashbord dashbord">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8 col-xl-9">
                            <div className="my_profile_form_area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 className="fz20 mb20">Yeni İlan Ver</h4>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            cityId: "",
                                            deadLine: "",
                                            description: "",
                                            employerId: "",
                                            jobPositionId: "",
                                            jobTypeId: "",
                                            jobWorkSpaceTypeId: "",
                                            openPositionCount: "",
                                            salaryMax: "",
                                            salaryMin: "",

                                        }}
                                       
                                        onSubmit={(values, { setSubmitting }) => {
                                            let jobAdvertService = new JobAdvertService()
                                            jobAdvertService.addJobAdvert(values)
                                            .then((result) => console.log(result.request))
                                            .catch((result) => console.log(result))
                                            console.log(values);

                                            setTimeout(() => {
                                                alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ isSubmitting,errors }) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-12">
                                                        <div className="my_profile_select_box form-group">
                                                            <label htmlFor="exampleFormControlInput9">Pozisyon</label><br />
                                                            <Field name="jobPositionId" as="select" className="form-select form-select-lg ">
                                                                <option placeholder="Pozisyon Seçiniz" defaultValue>Pozisyon Seçiniz</option>
                                                                {jobPositions.map(jp => (
                                                                    <option key={jp.id} value={jp.id}>{jp.name}</option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage name="jobPositionId" component="div" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="my_resume_textarea">
                                                            <div className="form-group">
                                                                <label htmlFor="exampleFormControlTextarea1">Açıklama</label>
                                                                <Field name="description" as="textarea" className="form-control" rows="9" />
                                                                <ErrorMessage name="description" component="div" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_input form-group">
                                                            <label htmlFor="formGroupExampleInputDate">Son Başvuru Tarihi</label>
                                                            <Field type="date" name="deadLine" className="form-control" placeholder="2021-10-10" />
                                                            <ErrorMessage name="deadLine" component="div" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_input form-group">
                                                            <label htmlFor="formGroupExampleInputDate">Maximum Maaş</label>
                                                            <Field name="salaryMax" type="number" className="form-control" />
                                                         
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_input form-group">
                                                            <label htmlFor="formGroupExampleInputDate">Minimum Maaş</label>
                                                            <Field name="salaryMin" type="number" className="form-control" />
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_input form-group">
                                                            <label htmlFor="formGroupExampleInputDate">Açık Pozisyon Sayısı</label>
                                                            <Field type="number" className="form-control" name="openPositionCount" />
                                                            <ErrorMessage name="openPositionCount" component="div" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_input form-group">
                                                            <label htmlFor="formGroupExampleInputDate">İş Veren ID</label>
                                                            <Field name="employerId" type="number" className="form-control" />
                                                            <ErrorMessage name="employerId" component="div" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_select_box form-group">
                                                            <label htmlFor="exampleFormControlInput9">Şehir</label><br />
                                                            <Field name="cityId" as="select" className="form-select form-select-lg ">
                                                                <option placeholder="Şehir Seçiniz" defaultValue>Şehir Seçiniz</option>
                                                                {cities.map(city => (
                                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                                ))}
                                                            </Field>
                                                            <ErrorMessage name="cityId" component="div" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_select_box form-group">
                                                            <label htmlFor="exampleFormControlInput9">İşin Zaman Şekli</label><br />
                                                            <Field name="jobTypeId" as="select" className="form-select form-select-lg ">
                                                                <option placeholder="İşin Zaman Şeklini Seçiniz" defaultValue>İşin Zaman Şeklini Seçiniz</option>

                                                                {jobTypes.map(jt => (
                                                                    <option key={jt.id} value={jt.id}>{jt.type}</option>
                                                                ))}
                                                            </Field>
                                                      
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="my_profile_select_box form-group">
                                                            <label htmlFor="exampleFormControlInput9">İş Çalışma Şekli</label><br />

                                                            <Field name="jobWorkSpaceTypeId" as="select" className="form-select form-select-lg ">
                                                                <option placeholder="Çalışma Şekli Seçiniz" defaultValue>Çalışma Şekli Seçiniz</option>
                                                                {jobWorkSpaceTypes.map(jw => (
                                                                    <option key={jw.id} value={jw.id}>{jw.name}</option>
                                                                ))}
                                                            </Field>
                                                       
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="my_profile_input">
                                                            <button className="btn btn-lg btn-thm" type="submit" disabled={isSubmitting}>
                                                                İlanı Yayınla
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
            </section>
            <a className="scrollToHome text-thm" href="#"><i className="flaticon-rocket-launch"></i></a>
        </div>
    )
}
