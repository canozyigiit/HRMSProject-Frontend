import React, { useState, useEffect } from 'react'
import JobAdvertService from '../../services/JobAdvertService'
import JobPositionService from '../../services/JobPositionService'
import defaultImage from '../../images/logo.png'



export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])
    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllOpenTrueJobAdvertList().then(result => setJobAdverts(result.data.data))
    })
    const [jobPositions, setjobPositions] = useState([])
    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setjobPositions(result.data.data))
    })

    return (
        <section className="our-faq bgc-fa mt50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 dn-smd">
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Arama Kelimeleri</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="e.g. web design" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Lokasyon</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tüm Lokasyonlar" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon3"><span className="flaticon-location-pin"></span></button>
                                </div>
                            </div>
                        </div>
                        

                        <div className="cl_latest_activity mb30">
                            <h4 className="fz20 mb15">İş Tipi</h4>
                            <div className="ui_kit_whitchbox">

                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                    <label className="custom-control-label" htmlFor="customSwitch2">Full Time</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                                    <label className="custom-control-label" htmlFor="customSwitch3">Part Time</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch4" />
                                    <label className="custom-control-label" htmlFor="customSwitch4">Uzaktan</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch5" />
                                    <label className="custom-control-label" htmlFor="customSwitch5">İş Yerinde</label>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                    <div className="col-md-12 col-lg-9 col-xl-9">
                        <div className="row">
                            <div className="col-lg-12 mb30">
                                <h4 className="fz20 mb15">Your Selected</h4>
                                <div className="tags-bar">
                                    <span>Design<i className="close-tag">x</i></span>
                                    <span>UX/UI<i className="close-tag">x</i></span>
                                    <div className="action-tags">
                                        <a href=" "><i className="fa fa-trash-o"></i> Clean All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="candidate_job_alart_btn">
                                    <h4 className="fz20 mb15">20 Candidates Found</h4>
                                    <a className="btn btn-thm" href=" "><span className="flaticon-mail"></span> Get Job Alerts</a>
                                    <button className="btn btn-thm btns dn db-991 float-right">Show Filter</button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <div className="candidate_revew_select text-right mt50 mt10-smd">
                                    <ul>
                                        <li className="list-inline-item">Sort by:</li>
                                        <li className="list-inline-item">
                                            <select className="selectpicker show-tick">
                                                <option>Newest</option>
                                                <option>Recent</option>
                                                <option>Old Review</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content_details">
                                    <div className="details">
                                        {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()"><span>Hide Filter</span><i>×</i></a> */}
                                        <div className="faq_search_widget mb30">
                                            <h4 className="fz20 mb15">Search Keywords</h4>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Find Your Question" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button" id="button-addon4"><span className="flaticon-search"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq_search_widget mb30">
                                            <h4 className="fz20 mb15">Location</h4>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Find Your Question" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button" id="button-addon5"><span className="flaticon-location-pin"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq_search_widget mb30">
                                            <h4 className="fz20 mb15">Category</h4>
                                            <div className="candidate_revew_select">
                                                <select className="selectpicker w100 show-tick">
                                                    <option>All Categories</option>
                                                    <option>Recent</option>
                                                    <option>Old Review</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="cl_latest_activity mb30">
                                            <h4 className="fz20 mb15">Job Type</h4>
                                            <div className="ui_kit_whitchbox">
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch7" />
                                                    <label className="custom-control-label" htmlFor="customSwitch7">Full Time</label>
                                                </div>
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch8" />
                                                    <label className="custom-control-label" htmlFor="customSwitch8">Part Time</label>
                                                </div>
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch9" />
                                                    <label className="custom-control-label" htmlFor="customSwitch9">Uzaktan</label>
                                                </div>
                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitch10" />
                                                    <label className="custom-control-label" htmlFor="customSwitch10">İş Yerinde</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cl_skill_checkbox mb30">
                                            <h4 className="fz20 mb20">İş Pozisyonları</h4>
                                            <div className="content ui_kit_checkbox text-left">
                                                {jobPositions.map((jobPositon) => (
                                                    <div className="custom-control custom-checkbox" key={jobPositon.id}>
                                                        <input type="checkbox" className="custom-control-input" id="customCheck37" />
                                                        <label className="custom-control-label" htmlFor="customCheck37">{jobPositions.name}</label>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {jobAdverts.map((jobAdvert) => (
                                <div className="col-lg-12 mt30" key={jobAdvert.id}>
                                    <div className="fj_post style2">
                                        <div className="details">
                                            <h5 className="job_chedule text-thm">Full Time</h5>
                                            <div className="thumb">
                                                {jobAdvert.employerPhoto ? <img src={jobAdvert.employerPhoto} alt=" " /> : <img src={defaultImage} alt=" " />}
                                            </div>
                                            <h4>{jobAdvert.jobPositionName}</h4>
                                            <p>Yayın Tarihi:  {new Date(jobAdvert.createdDate).toDateString()}  / Son Başvuru Tarihi: {new Date(jobAdvert.deadLine).toDateString()} <a className="text-thm" href=" "> Şirket :{jobAdvert.employerCompanyName}</a></p>
                                            <ul className="featurej_post">
                                                <li className="list-inline-item"><span className="flaticon-location-pin"></span> <a href=" ">{jobAdvert.cityName}</a></li>
                                                <li className="list-inline-item"><span className="flaticon-price pl20"></span> <a href=" ">{jobAdvert.salaryMin} - {jobAdvert.salaryMax}</a></li>
                                                <li className="list-inline-item"><span className="flaticon-bullseye  pl20"></span> <a href=" ">Açık Pozisyon : {jobAdvert.openPositionCount}</a></li>
                                            </ul>
                                        </div>
                                        <a className="favorit" href=" "><span className="flaticon-favorites"></span></a>
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-12">
                                <div className="mbp_pagination">
                                    <ul className="page_navigation">
                                        <li className="page-item disabled">
                                            <a className="page-link" href=" " tabIndex="-1" aria-disabled="true"> <span className="flaticon-left-arrow"></span> Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href=" ">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href=" ">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href=" ">3</a></li>
                                        <li className="page-item"><a className="page-link" href=" ">4</a></li>
                                        <li className="page-item"><a className="page-link" href=" ">5</a></li>
                                        <li className="page-item"><a className="page-link" href=" ">...</a></li>
                                        <li className="page-item"><a className="page-link" href=" ">45</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href=" ">Next <span className="flaticon-right-arrow"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
