import React, { useState, useEffect } from 'react'
import EmployerService from '../../services/EmployerService'
import ConfirmEmployerService from '../../services/ConfirmEmployerService'
import { toast } from 'react-toastify'
import defaultImage from '../../images/logo.png'
import CurrentEmployerService from '../../services/CurrentEmployerService'
export default function ConfirmUpdateEmployer() {
    const [employers, setEmployers] = useState([])
    const [currentEmployer, setCurrentEmployer] = useState({})
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getByisUpdatedTrue().then(result => setEmployers(result.data.data))
    }, [])
    const showUpdate=(employerId)=>{
       let currentEmployerService = new CurrentEmployerService()
       currentEmployerService.getByEmployerId(employerId).then(result => setCurrentEmployer(result.data.data))
    }
    const confirmed = (companyName, systemPersonnelId) => {
        let confirmEmployerService = new ConfirmEmployerService()
        confirmEmployerService.confirmUpdateEmployer(companyName, systemPersonnelId).then()
        toast.success(`${companyName} güncelleme onaylandı!`)
        setTimeout('location.reload(false)', 5000);
    }
    return (
        <div className="row">

            <div className="col-lg-12">
                <h4 className="fz20">Güncelleme Onayı Bekleyen İş Verenler</h4>
            </div>
            {employers.length < 1 &&
                <div className="alert alert-success" role="alert">
                    Güncelleme Onayı Bekleyen İş Veren Bulunamadı!
                </div>}

            {employers.map((employer) => (
                <div>
                    <div className="col-lg-12">
                        <div className="candidate_list_view style2">
                            <div className="thumb">
                            {employer.photo ? <img src={employer.photo} style={{ maxHeight: "150px" }} /> : <img src={defaultImage} style={{ maxHeight: "90px" }}/>}
                         
                        </div>
                            <div className="content">
                                <h4 className="title">{employer.companyName} </h4>
                                <p><span className="flaticon-link text-thm"></span>  &nbsp;{employer.webSite} <span className="text-thm2">   &nbsp;<span className="flaticon-phone-call text-thm">  &nbsp;</span>{employer.phone}</span></p>

                                <ul className="address_list">
                                    <li className="list-inline-item"><a ><span className="flaticon-location-pin"></span>  &nbsp;{employer.city?.name}</a></li>
                                    <li className="list-inline-item"><a ><span className="flaticon-team"></span>  {employer.teamSize}</a></li>
                                </ul>
                            </div>
                            <ul className="view_edit_delete_list mt25 float-right fn-xl">
                                <button type="button" class="btn btn-lg btn-thm" title="Onayla" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() =>showUpdate(employer.id)} > Görüntüle<span className="verified text-thm2 pl10"><i className="flaticon-magnifying-glass"></i></span></button>
                                &nbsp;
                                <button type="button" class="btn btn-lg btn-thm" title="Onayla" onClick={() => confirmed(employer.companyName, 4)}> Onayla<span className="verified text-thm2 pl10"><i className="fa fa-check-circle"></i></span></button>
                            </ul>
                        </div>
                    </div>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">İş Veren Güncellemesi</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <div className="row">
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="candidate_personal_info style3">
                                                <div className="thumb">
                                                {employer.photo ? <img src={employer.photo} style={{ maxHeight: "150px" }} /> : <img src={defaultImage} style={{ maxHeight: "90px" }}/>}
                                                </div>
                                                <div className="details">
                                                    <h3>{employer.companyName}</h3>
                                                    <p className="text-thm2"></p>
                                                    <ul className="address_list">
                                                        <li className="list-inline-item"><a ><span className="flaticon-link text-thm"></span>{employer.webSite}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-phone-call text-thm"></span> {employer.phone}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-mail text-thm"></span> {employer.email}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-paper-plane"></span>{employer.city?.name}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-timeline"></span>{employer.since}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-team"></span> {employer.teamSize}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="candidate_personal_info style3">
                                                <div className="thumb">
                                                {currentEmployer.photo ? <img src={currentEmployer.photo} style={{ maxHeight: "150px" }} /> : <img src={defaultImage} style={{ maxHeight: "90px" }}/>}
                                                </div>
                                                <div className="details">
                                                    <h3>{currentEmployer.companyName}</h3>
                                                    <p className="text-thm2"></p>
                                                    <ul className="address_list">
                                                        <li className="list-inline-item"><a ><span className="flaticon-link text-thm"></span>{currentEmployer.webSite}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-phone-call text-thm"></span> {currentEmployer.phone}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-mail text-thm"></span> {currentEmployer.email}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-paper-plane"></span>{currentEmployer.city?.name}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-timeline"></span>{currentEmployer.since}</a></li>
                                                        <li className="list-inline-item"><a ><span className="flaticon-team"></span> {currentEmployer.teamSize}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                                    <button type="button" class="btn btn-lg btn-thm" title="Onayla" onClick={() => confirmed(employer.companyName, 4)}> Onayla<span className="verified text-thm2 pl10"><i className="fa fa-check-circle"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>


    )
}
