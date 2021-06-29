import React, { useState, useEffect } from 'react'
import EmployerService from '../../services/EmployerService'
import ConfirmEmployerService from '../../services/ConfirmEmployerService'
import { toast } from 'react-toastify'

export default function ConfirmEmployer() {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployerByisConfirmedFlase().then(result => setEmployers(result.data.data))
   
    }, [])
    const confirmed = (companyName, systemPersonnelId) => {
        let confirmEmployerService = new ConfirmEmployerService()
        confirmEmployerService.confirmEmployer(companyName, systemPersonnelId).then()
        toast.success(`${companyName} onaylandı!`)
        setTimeout('location.reload(false)', 5000);
    }
    return (
        <div className="row">
         
            <div className="col-lg-12">
                <h4 className="fz20">Onay Bekleyen İş Verenler</h4>
            </div>
               {employers.length < 1 && 
            <div className="alert alert-success" role="alert">
                Onay Bekleyen İş Veren Bulunamadı!
            </div>}

            {employers.map((employer) => (
                <div className="col-lg-12">
                    <div className="candidate_list_view style2">
                        {/* <div className="thumb">
                            {employer.photo ? <img src={employer.photo} alt=" " /> : <img src={defaultImage} alt=" " />}
                            <div className="cpi_av_rating"><span>4.5</span></div>
                        </div> */}
                        <div className="content">
                            <h4 className="title">{employer.companyName} </h4>
                            <p><span className="flaticon-link text-thm"></span>  &nbsp;{employer.webSite} <span className="text-thm2">   &nbsp;<span className="flaticon-phone-call text-thm">  &nbsp;</span>{employer.phone}</span></p>

                            <ul className="address_list">
                                <li className="list-inline-item"><a ><span className="flaticon-location-pin"></span>  &nbsp;{employer.city?.name}</a></li>
                                <li className="list-inline-item"><a ><span className="flaticon-team"></span>  {employer.teamSize}</a></li>
                            </ul>
                        </div>
                        <ul className="view_edit_delete_list mt25 float-right fn-xl">
                        <button type="button" class="btn btn-lg btn-thm" title="Onayla" onClick={() => confirmed(employer.companyName, 4)}> Onayla<span className="verified text-thm2 pl10"><i className="fa fa-check-circle"></i></span></button>
                        </ul>
                    </div>
                </div>
            ))}

        </div>


    )
}
