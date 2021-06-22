import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import EmployerService from '../../services/EmployerService';
import { Link } from 'react-router-dom';
import JobAdvertService from '../../services/JobAdvertService';
import defaultImage from '../../images/logo.png'

export default function EmployerDetail() {

    let { employerId } = useParams();
   
    const [employer, setEmployer] = useState({})
    const [jobAdverts, setJobAdverts] = useState([])
   
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployerById(employerId).then(result => setEmployer(result.data.data))
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllisOpenTrueAndEmployerId(employerId).then(result => setJobAdverts(result.data.data))
    }, [])

    return (
        <div>
            <section className="emplye_single_v2 mt70 mt50 pt50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-xl-9">
                            <div className="candidate_personal_info style3">
                                <div className="thumb">
                                {employer.photo ? <img src={employer.photo} alt=" " /> : <img src={defaultImage} alt=" " />}
                                </div>
                                <div className="details">
                                    <h3>{employer.companyName}</h3>
                                    <p className="text-thm2"></p>
                                    <ul className="address_list">
                                        <li className="list-inline-item"><a href=" "><span className="flaticon-link text-thm"></span>{employer.webSite}</a></li>
                                        <li className="list-inline-item"><a href=" "><span className="flaticon-phone-call text-thm"></span> {employer.phone}</a></li>
                                        <li className="list-inline-item"><a href=" "><span className="flaticon-mail text-thm"></span> {employer.email}</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bgc-fa employe_details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row personer_information_company mt0">
                                        <div className="col-lg-12">
                                            <h4 className="fz20 mb30">Şirket Bilgisi</h4>
                                        </div>
                                        <div className="col-sm-4 col-lg-4">
                                            <div className="icon text-thm"><span className="flaticon-paper-plane"></span></div>
                                            <div className="details">
                                                <p>Lokasyon</p>
                                                <p>United States, San Diego</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-lg-4">
                                            <div className="icon text-thm"><span className="flaticon-timeline"></span></div>
                                            <div className="details">
                                                <p>Since</p>
                                                <p>2002</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-lg-4">
                                            <div className="icon text-thm"><span className="flaticon-label"></span></div>
                                            <div className="details">
                                                <p>Yayınlanan İlan</p>
                                                <p>4</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-lg-4">
                                            <div className="icon text-thm"><span className="flaticon-2-squares"></span></div>
                                            <div className="details">
                                                <p>Kategoriler</p>
                                                <p>Arts, Design, Media</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-lg-4">
                                            <div className="icon text-thm"><span className="flaticon-team"></span></div>
                                            <div className="details">
                                                <p>Takım Boyutu</p>
                                                <p>15</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidate_about_info style2">
                                        <h4 className="fz20 mb30">İş Ağı Hakkında</h4>
                                        <p className="mb30">Employerin ağı hakkında bilgilendirme henüz isterlerde yok</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="my_resume_eduarea">
                                        <h4 className="title mb30">Bazı Açık Pozisyonlar</h4>
                                    </div>
                                </div>
                                {jobAdverts.slice(0, 3).map((jobAdvert) => (
                                    <div className="col-lg-12">
                                        <div className="fj_post style2 one">
                                            <div className="details ">
                                                <h5 className="job_chedule text-thm2 ">{jobAdvert.jobTypeType} - {jobAdvert.jobStyleName}</h5>
                                                <div className="thumb fn-smd">
                                                {jobAdvert.employerPhoto ? <img src={jobAdvert.employerPhoto} alt=" " /> : <img src={defaultImage} alt=" " />}
                                                </div>
                                                <h4>{jobAdvert.jobPositionName}</h4>
                                                <p> Yayın Tarihi :{new Date(jobAdvert.createdDate).toDateString()}<a className="text-thm" href=" "> Şirket :{jobAdvert.employerCompanyName}</a></p>
                                                <ul className="featurej_post">
                                                    <li className="list-inline-item"><span className="flaticon-location-pin"></span> <a href=" ">{jobAdvert.cityName}</a></li>
                                                    <li className="list-inline-item"><span className="flaticon-price pl20"></span> <a href=" ">{jobAdvert.salaryMin} - {jobAdvert.salaryMax}</a></li>
                                                    <li className="list-inline-item"><span className="flaticon-bullseye  pl20"></span> <a href=" ">Açık Pozisyon : {jobAdvert.openPositionCount}</a></li>
                                                </ul>
                                            </div>
                                            <Link to={`/jobAdverts/${jobAdvert.id}`}><a href=" " className="btn btn-md btn-transparent" >İlana Git</a></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-4">

                            <div className="candidate_social_widget">
                                <ul>
                                    <li>Sosyal Medya : </li>
                                    <li><a href=" "><i className="fa fa-facebook"></i></a></li>
                                    <li><a href=" "><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=" "><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <h4 className="fz20 mb30">{employer.companyName} ile İletişime geç</h4>
                            <div className="candidate_contact_form">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="İsim Soyisim" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="E-posta" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Konu" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mesaj"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-thm">Gönder <span className="flaticon-right-arrow"></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
