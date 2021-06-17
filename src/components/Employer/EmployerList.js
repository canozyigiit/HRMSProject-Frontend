import React,{ useState, useEffect } from 'react'
import EmployerService from '../../services/EmployerService'
import defaultImage from '../../images/logo.png'
import { Link } from 'react-router-dom'
export default function EmployerList() {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    },[])
    return (
        <section className="our-faq bgc-fa mt50">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 dn-smd">
                        <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Search Employer</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="ör. Amazon" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="faq_search_widget mb30">
                            <h4 className="fz20 mb15">Location</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="All Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-location-pin"></span></button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-9 col-xl-9">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6">
                                <div className="candidate_job_alart_btn">
                                    <h4 className="fz20 mt10">İş Verenler</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                               
                                <div className="content_details">
                                    <div className="details">
                                        {/* <a href="javascript:void(0)" className="closebtn" onClick="closeNav()"><span>Hide Filter</span><i>×</i></a> */}
                                        <div className="faq_search_widget mb30">
                                            <div className="faq_search_widget mb30">
                                                <h4 className="fz20 mb15">Search Employer</h4>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="ör. Amazon" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-search"></span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="faq_search_widget mb30">
                                                <h4 className="fz20 mb15">Location</h4>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="All Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><span className="flaticon-location-pin"></span></button>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {employers.map((employer) => (
                            <div className="col-sm-6 col-lg-6 col-xl-4 mt30" key={employer.id}>
                                <div className="employe_grid text-center">
                                    <div className="thumb">
                                    {employer.photo ? <img  src={employer.photo} alt=" "/> : <img src={defaultImage} alt=" "/>}
                                    </div>
                                    <div className="details">
                                    <Link to={`/employers/${employer.id}`}><a href=" " className="text-thm" >{employer.companyName}</a></Link>
                                        <p className="text-thm2">{employer.webSite}</p>
                                    </div>
                                </div>
                            </div>
                              ))}
                            
                           
                           
                           
                            
                           
                            
                           
                            {/* <div className="col-lg-12">
                                <div className="mbp_pagination">
                                    <ul className="page_navigation">
                                        <li className="page-item disabled">
                                            <a className="page-link" tabIndex="-1" aria-disabled="true"> <span className="flaticon-left-arrow"></span> Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" >1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link">2 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="page-item"><a className="page-link" >3</a></li>
                                        <li className="page-item"><a className="page-link">4</a></li>
                                        <li className="page-item"><a className="page-link">5</a></li>
                                        <li className="page-item"><a className="page-link">...</a></li>
                                        <li className="page-item"><a className="page-link" >45</a></li>
                                        <li className="page-item">
                                            <a className="page-link">Next <span className="flaticon-right-arrow"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
