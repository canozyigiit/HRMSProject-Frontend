import React, { useState, useEffect } from 'react'
import defaultImage from '../../images/logo.png'
import { Link } from 'react-router-dom'
import ConfirmJobAdvertService from '../../services/ConfirmJobAdvertService'
import JobAdvertService from '../../services/JobAdvertService'
import { toast } from 'react-toastify'


export default function ConfirmJobAdvert() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {

        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertByisConfirmedFlase().then(result => setJobAdverts(result.data.data))


    }, [])
    // function sayfayiyenile(saniye) {
    //     var t;
    //     t = parseInt(Math.floor(saniye * 1000)); // Saniyeyi milisaniyeye dönüştürdük.
    //     setTimeout('location.reload(false)', t); // setTimeout bir fonksiyonu t milisaniye sonra bir kez çalıştırır.
    //     }
    const confirmed = (jobAdvertId, systemPersonnelId) => {
        let confirmJobAdvertService = new ConfirmJobAdvertService()
        confirmJobAdvertService.confirmJobAdvert(jobAdvertId, systemPersonnelId).then()
        toast.success(`İlan onaylandı!`)
        setTimeout('location.reload(false)', 5000);
    }
    return (

        <div className="row">
            <div className="col-lg-12">
                <h4 className="fz20">Onay Bekleyen İş İlanları</h4>
            </div>
            {jobAdverts.length < 1 && 
            <div className="alert alert-success" role="alert">
                Onay Bekleyen İş İlanı Bulunamadı!
            </div>}
            {jobAdverts.map((jobAdvert) => (
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
                            <button type="button" class="btn btn-lg btn-thm" title="Onayla" onClick={() => confirmed(jobAdvert.id, 4)}> Onayla<span className="verified text-thm2 pl10"><i className="fa fa-check-circle"></i></span></button>

                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>

    )
}
