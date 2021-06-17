import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import JobAdvertService from '../../services/JobAdvertService';
import defaultImage from '../../images/logo.png'
import { Link } from 'react-router-dom';

export default function JobAdvertDetail() {
    // {jobAdvert.employer.photo ? <img className="img-fluid rounded" src={jobAdvert.employer.photo} /> : <img src={defaultImage}/>}

    let { jobAdvertId } = useParams();

    const [jobAdvert, setJobAdvert] = useState({})

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertById(jobAdvertId).then(result => setJobAdvert(result.data.data))
    }, [])
    return (
        <div>
            <section className="job_single_v5_banner mt-30"></section>
            <section className="bgc-fa pt40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="candidate_personal_info mbt45 style2 job_singe_v5">
                                        <div className="thumb one text-center">
                                            {jobAdvert.employerPhoto ? <img src={jobAdvert.employerPhoto} alt=" " /> : <img src={defaultImage} alt=" " />}
                                        </div>
                                        <div className="details">
                                            <h3>{jobAdvert.jobPositionName}</h3>
                                            <Link to={`/employers/${jobAdvert.employerId}`}><a href=" " className="text-thm" > Şirket :{jobAdvert.employerCompanyName}</a></Link>
                                            <ul className="address_list">
                                                <li className="list-inline-item"><a href="aaa"><span className="flaticon-location-pin"></span>{jobAdvert.cityName}</a></li>
                                                <li className="list-inline-item"><a href=" "><span className="flaticon-price"></span>₺{jobAdvert.salaryMin} - ₺{jobAdvert.salaryMax}</a></li>
                                            </ul>
                                            <Link to="/jobAdverts"><a className="mt25" href=" ">Tüm İlanlara Git <span className="flaticon-right-arrow pl10"></span></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row job_meta_list mt30 mb30">
                                <div className="col-sm-4 col-lg-4"><button className="btn btn-block btn-thm">Şimdi Başvur <span className="flaticon-right-arrow pl10"></span></button></div>
                                <div className="col-sm-4 col-lg-4"><button className="btn btn-block btn-white"><span className="flaticon-favorites fz24 pr10"></span>Favorilere Ekle</button></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="candidate_about_info style2 mt10">
                                        <h4 className="fz20 mb30">İlan Açıklaması</h4>
                                        <p className="mb30">{jobAdvert.description}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
