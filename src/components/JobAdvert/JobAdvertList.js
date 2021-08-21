import React, { useState, useEffect } from 'react'
import JobAdvertService from '../../services/JobAdvertService'
import JobTypeService from '../../services/JobTypeService'
import JobWorkSpaceTypeService from '../../services/JobWorkSpaceTypeService'
import JobPositionService from '../../services/JobPositionService'
import defaultImage from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { Pagination } from 'antd';


export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])
    const [activePage, setActivePage] = useState(1);
    const [jobPositions, setjobPositions] = useState([])
    const [jobTypes, setJobTypes] = useState([])
    const [jobWorkSpaceTypes, setJobWorkSpaceTypes] = useState([])
    const [searchTerm, setsearchTerm] = useState("")
    const [searchTermCityName, setsearchTermCityName] = useState("")

    const changePage = (page) => {
        setActivePage(page);
    };

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllByPage(activePage).then(result => setJobAdverts(result.data.data))

    }, [activePage])

   
    useEffect(() => {

        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setjobPositions(result.data.data))

        let jobTypeService = new JobTypeService()
        jobTypeService.getJobTypes().then(result => setJobTypes(result.data.data))

        let jobWorkSpaceTypeService = new JobWorkSpaceTypeService()
        jobWorkSpaceTypeService.getJobWorkSpaceTypes().then(result => setJobWorkSpaceTypes(result.data.data))

    }, [])

    return (
        <section className="our-faq bgc-fa mt50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 dn-smd">

                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">İş İlanları</h4>

                            <div className="input-group mb-3">
                                <input type="text" onChange={(event) => {
                                    setsearchTerm(event.target.value)
                                }} type="text" className="form-control" placeholder="ör. BackendDeveloper" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Lokasyon</h4>
                            <div className="input-group mb-3">
                                <input onChange={(event) => {
                                    setsearchTermCityName(event.target.value)
                                }} type="text" className="form-control" placeholder="Tüm Lokasyonlar" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon3"><span className="flaticon-location-pin"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="cl_latest_activity mb30">
                            <h4 className="fz20 mb15">İş Tipi</h4>
                            <div className="ui_kit_whitchbox">
                                {jobTypes.map((jobType) => (
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id={jobType.id} />
                                        <label className="custom-control-label" htmlFor={jobType.id}>{jobType.type}</label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="cl_latest_activity mb30">
                            <h4 className="fz20 mb15">İş Tipi</h4>
                            <div className="ui_kit_whitchbox">
                                {jobWorkSpaceTypes.map((jobWorkSpaceType) => (
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id={jobWorkSpaceType.id} />
                                        <label className="custom-control-label" htmlFor={jobWorkSpaceType.id}>{jobWorkSpaceType.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-9 col-xl-9">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="candidate_job_alart_btn">
                                    <h4 className="fz20 mt10">Tüm İş İlanları</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6 text-right mt50">
                                <ul>
                                    <li className="list-inline-item">Sırala:</li>
                                    <li className="list-inline-item">
                                        <select className="form-select" aria-label="Default select example">
                                            <option defaultValue>Sırala</option>
                                            <option >En Son Yayınlanan İlanlar</option>

                                        </select>
                                    </li>
                                </ul>
                            </div>


                            <div className="col-sm-12 col-lg-6">

                                <div className="content_details">
                                    <div className="details">
                                        {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()"><span>Hide Filter</span><i>×</i></a> */}
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
                            {jobAdverts.filter((jobAdvert) => {
                                if (searchTerm == "") {
                                    return jobAdvert
                                }
                                else if (jobAdvert.jobPositionName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                    return jobAdvert;
                                }

                            }).filter((jobAdvert) => {
                                if (searchTermCityName == "") {
                                    return jobAdvert;
                                } else if (jobAdvert.cityName.toLocaleLowerCase().includes(searchTermCityName.toLocaleLowerCase())) {
                                    return jobAdvert;
                                }
                            }).map((jobAdvert) => (
                                <div className="col-lg-12 mt30" key={jobAdvert.id}>
                                    <div className="fj_post style2 jlv5">
                                        <div className="details">
                                            <h5 className="job_chedule text-thm">{jobAdvert.jobTypeType} - {jobAdvert.jobWorkSpaceTypeName}</h5>
                                            <div className="thumb">
                                                {jobAdvert.employerPhoto ? <img src={jobAdvert.employerPhoto} alt=" " /> : <img src={defaultImage} alt=" " />}
                                            </div>
                                            <h4>{jobAdvert.jobPositionName}</h4>
                                            <p> Yayın Tarihi :{new Date(jobAdvert.createdDate).toDateString()}<Link to={`/employers/${jobAdvert.employerId}`}><a href=" " className="text-thm" > Şirket :{jobAdvert.employerCompanyName}</a></Link>
                                            </p>
                                            <ul className="featurej_post">
                                                <li className="list-inline-item"><span className="flaticon-location-pin"></span> <a href=" ">{jobAdvert.cityName}</a></li>
                                                <li className="list-inline-item"><span className="flaticon-price pl20"></span> <a href=" ">{jobAdvert.salaryMin} - {jobAdvert.salaryMax}</a></li>
                                                <li className="list-inline-item"><span className="flaticon-bullseye  pl20"></span> <a href=" ">Açık Pozisyon : {jobAdvert.openPositionCount}</a></li>
                                            </ul>
                                        </div>
                                        <ul className="pjlv5">

                                            <li className="list-inline-item">
                                                <Link to={`/jobAdverts/${jobAdvert.id}`}><a href=" " className="btn btn-md btn-transparent" >İlana Git</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}

                            <Pagination
                                style={{ 'marginLeft': '250px' }}
                                total={50}
                                current={activePage}
                                onChange={changePage}
                                showQuickJumper
                                defaultCurrent={1}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}


