import React, { useState, useEffect } from 'react'
import JobAdvertService from '../../services/JobAdvertService'
import { Link } from 'react-router-dom'
import defaultImage from '../../images/logo.png'

export default function FeaturedJobs() {

	const [jobAdverts, setJobAdverts] = useState([])
	useEffect(() => {
		let jobAdvertService = new JobAdvertService()
		jobAdvertService.getAllOpenTrueJobAdvertList().then(result => setJobAdverts(result.data.data))
	}, [])

	return (
		<section className="popular-job bgc-fa pb30">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="ulockd-main-title">
							<h4 className=" float-left fs-2 fst-italic">Öne Çıkan İlanlar</h4>
							<Link to="/jobAdverts"><a href=" " className="text-thm float-right">Tüm İlanlara Git<i className="flaticon-right-arrow pl15"></i></a></Link>
						</div>
					</div>
				</div>
				<div className="row">
					{
						jobAdverts.slice(0, 4).map((jobAdvert) => (
							<div className="col-sm-12 col-lg-12" key={jobAdvert.id}>
								<div className="fj_post">
									<div className="details">
										<h5 className="job_chedule text-thm mt0">{jobAdvert.jobTypeType} - {jobAdvert.jobWorkSpaceTypeName}</h5>
										<div className="thumb fn-smd">
										{jobAdvert.employerPhoto ? <img src={jobAdvert.employerPhoto} alt=" " /> : <img src={defaultImage} alt=" " />}
										</div>
										<h4>{jobAdvert.jobPositionName}</h4>
										<p>Yayın Tarihi:  {new Date(jobAdvert.createdDate).toDateString()}  / Son Başvuru Tarihi: {new Date(jobAdvert.deadLine).toDateString()} <Link to={`/employers/${jobAdvert.employerId}`}><a href=" " className="text-thm" > Şirket :{jobAdvert.employerCompanyName}</a></Link></p>
										<ul className="featurej_post">
											<li className="list-inline-item"><span className="flaticon-location-pin"></span> <a href=" " >{jobAdvert.cityName}</a></li>
											<li className="list-inline-item"><span className="flaticon-price pl20"></span> <a href=" ">{jobAdvert.salaryMin} - {jobAdvert.salaryMax}</a></li>
										</ul>
									</div>
									<Link to={`/jobAdverts/${jobAdvert.id}`}><a href=" " className="btn btn-md btn-transparent float-right fn-smd" >İlana Git</a></Link>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
