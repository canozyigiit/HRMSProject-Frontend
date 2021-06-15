import React, { useState, useEffect } from 'react'
import JobSeekerService from '../../services/JobSeekerService'
import defaultImage from '../../images/user.png'
export default function JobSeekerList() {

    const [jobSekeers, setJobSekeers] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSekeers(result.data.data))
    })
    return (
        <section className="our-faq bgc-fa mt50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 dn-smd">
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Search Keywords</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Find Your Question" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Location</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Find Your Question" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-location-pin"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-9">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="candidate_job_alart_btn mb35">
                                    <h4 className="fz20 mb15">20 Candidates Found</h4>
                                    <a className="btn btn-thm" href=" "><span className="flaticon-mail"></span> Get Job Alerts</a>
                                    <button className="btn btn-thm btns dn db-991 float-right">Show Filter</button>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="candidate_revew_select text-right mb35 mt50">
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
                                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="faq_search_widget mb30">
                                            <h4 className="fz20 mb15">Location</h4>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Find Your Question" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-location-pin"></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {jobSekeers.map((jobSeeker) => (
                                <div className="col-md-6 col-lg-6" key={jobSeeker.id}>
                                    <div className="ef_post style2 mt30-smd">
                                        <div className="ef_header">
                                            <h4 className="hr_rate"><span className="text-thm">{jobSeeker.job}</span></h4>
                                            <a className="ef_bookmark" href=" " title="BookMark Freelancer"><span className="flaticon-favorites"></span></a>
                                        </div>
                                        <div className="thumb text-center">
                                            {jobSeeker.photo ? <img src={jobSeeker.photo} alt=" " /> : <img src={defaultImage} alt=" " />}

                                        </div>
                                        <div className="freelancer_review">
                                            <div className="everage_rating">4.5</div>
                                            <ul className="rating_list">
                                                <li className="list-inline-item"><a href=" "><span className="fa fa-star color-golden"></span></a></li>
                                                <li className="list-inline-item"><a href=" "><span className="fa fa-star color-golden"></span></a></li>
                                                <li className="list-inline-item"><a href=" "><span className="fa fa-star color-golden"></span></a></li>
                                                <li className="list-inline-item"><a href=" "><span className="fa fa-star color-golden"></span></a></li>
                                                <li className="list-inline-item"><a href=" "><span className="fa fa-star-o"></span></a></li>
                                            </ul>
                                            <h4 className="title">{jobSeeker.firstName} {jobSeeker.lastName} </h4>
                                            <p>{jobSeeker.email}</p>
                                        </div>
                                        <div className="details">
                                            <div className="job_locate">
                                                <p className="float-left">Location</p>
                                                <ul className="float-right">
                                                    <li className="list-inline-item m0"><p>Turkey</p></li>
                                                </ul>
                                            </div>
                                            <div className="job_srate">
                                                <span className="float-left">Job Success</span>
                                                <span className="float-right">100%</span>
                                            </div>
                                            <div className="ef_prf_link mt10">
                                                <a className="btn btn-block btn-transparent" href=" ">Profile Git <i className="flaticon-right-arrow pl10"></i></a>
                                            </div>
                                        </div>
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
