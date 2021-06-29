import React, { useState, useEffect } from 'react'
import JobSeekerService from '../../services/JobSeekerService'
import defaultImage from '../../images/user.png'
import { Link } from 'react-router-dom'
export default function JobSeekerList() {

    const [searchTerm, setsearchTerm] = useState("")
    const [searchTermJob, setsearchTermJob] = useState("")
    const [jobSekeers, setJobSekeers] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSekeers(result.data.data))
    }, [])
    return (
        <section className="our-faq bgc-fa mt50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 dn-smd">
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">İş Arayanlar</h4>
                            <div className="input-group mb-3">
                                <input onChange={(event)=>{
                                   setsearchTerm(event.target.value)
                                }} type="text" className="form-control" placeholder="ör. Can Özyiğit" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                            <h4 className="fz20 mb15">İşine Göre Ara</h4>
                            <div className="input-group mb-3">
                                <input onChange={(event)=>{
                                   setsearchTermJob(event.target.value)
                                }} type="text" className="form-control" placeholder="ör. Frontend Developer" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-9">
                        <h4>İş Arayanlar</h4>
                        <div className="row">
                            {jobSekeers.filter((jobSeeker)=>{
                                 if (searchTerm == "" ) {
                                    return jobSeeker
                                } 
                                else if(jobSeeker.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || jobSeeker.lastName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                    return jobSeeker;
                                }
                            }).filter((jobSeeker)=>{
                                if (searchTermJob == "" ) {
                                    return jobSeeker
                                } 
                                else if(jobSeeker.job.toLocaleLowerCase().includes(searchTermJob.toLocaleLowerCase())) {
                                    return jobSeeker;
                                }
                            }).map((jobSeeker) => (
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

                                            <div className="ef_prf_link mt10">

                                                <Link to={`/jobSeekers/${jobSeeker.id}`} ><a className="btn btn-block btn-transparent" href=" ">Profile Git <i className="flaticon-right-arrow pl10"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
