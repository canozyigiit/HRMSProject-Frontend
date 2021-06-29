import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import ResumeService from '../../services/ResumeService';
import NewSchoolModal from './Modal/NewSchoolModal';
import NewExperienceModal from './Modal/NewExperienceModal';
import NewLanguageCanvas from './OffCanvas/NewLanguageCanvas';
import NewTechnologyCanvas from './OffCanvas/NewTechnologyCanvas';




export default function MyResume() {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'geekyimages')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/canozyigitt/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json()
        console.log(file)

        setImage(file.secure_url)
        setLoading(false)
    }
    console.log(image)


    return (
        <div className="row">
            <div className="col-lg-12">
                <h4 className="fz20 mb20">Cv</h4>
            </div>



            <Formik
                initialValues={{
                    githubLink: "",
                    linkedLink: "",
                    description: "",
                    id: "",
                    photo: ""

                }}

                onSubmit={(values, { setSubmitting }) => {
                    let resumeService = new ResumeService
                    resumeService.updateResume(values).then()
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
                            {/* TODO: Düzeltilecek */}
                            <Field type="file" name="photo" onChange={uploadImage} />
                            {
                                loading ? (
                                    <h3>Yükleniyor...</h3>

                                ) : (
                                    <img src={image} name="photo" style={{ width: '200px' }} />
                                )
                            }

                        </div>
                        <div className="col-lg-12">
                            <div className="my_profile_thumb_edit"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1"> Resume ID</label>
                                    <Field className="form-control" name="id" />
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1">Github Link</label>
                                    <Field type="text" className="form-control" name="githubLink" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="my_profile_input form-group">
                                    <label htmlFor="formGroupExampleInput1">Linkedin Link</label>
                                    <Field type="text" className="form-control" name="linkedLink" />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="my_resume_textarea">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Açıklama</label>
                                        <Field name="description" as="textarea" className="form-control" rows="9" />
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="my_profile_input">
                                    <button className="btn btn-lg btn-thm" type="submit" disabled={isSubmitting}>
                                        Kaydet
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className="col-lg-12">
                <div className="my_resume_eduarea">
                    <NewSchoolModal />
                    <div className="content">
                        <div className="circle"></div>
                        <p className="edu_center">Walters University <small>2002 - 2004</small></p>
                        <h4 className="edu_stats">Masters In Fine Arts
                            <ul className="edu_stats_list float-right">
                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><span className="flaticon-edit"></span></a></li>
                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><span className="flaticon-rubbish-bin"></span></a></li>
                            </ul>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-12">
                <div className="my_resume_eduarea">
                    <NewExperienceModal/>
                    <div className="content">
                        <div className="circle"></div>
                        <p className="edu_center">Inwave Studio <small>2008 - 2012</small></p>
                        <h4 className="edu_stats">Masters In Fine Arts
                            <ul className="edu_stats_list float-right">
                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Edit"><span className="flaticon-edit"></span></a></li>
                                <li className="list-inline-item"><a href="#" data-toggle="tooltip" data-placement="top" title="Delete"><span className="flaticon-rubbish-bin"></span></a></li>
                            </ul>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>

                </div>
            </div>
            <div className="col-lg-12">
                <div className="my_resume_eduarea">
                    <div className="candidate_single_skill">

                       <NewTechnologyCanvas/>
                        <div className="skill_tag">
                            <ul className="tag_list">
                                {/* {resume.technologies?.map((technology) => (
												<li className="list-inline-item"><a >{technology.description}</a></li>
											))} */}
                                <li className="list-inline-item"><a >Java</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="my_resume_eduarea">
                    <div className="candidate_single_skill">
                    <NewLanguageCanvas/>
                        <div className="skill_tag">
                            <ul className="tag_list">
                                <li className="list-inline-item"><a >İngilizce</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
