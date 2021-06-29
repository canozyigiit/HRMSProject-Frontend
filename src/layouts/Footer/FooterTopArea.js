import React, { useState, useEffect } from 'react'
import JobPositionService from '../../services/JobPositionService'
import EmployerService from '../../services/EmployerService'
import JobAdvertService from '../../services/JobAdvertService'
import JobSeekerService from '../../services/JobSeekerService'
import  logo from '../../header-logo.png'
export default function FooterTopArea() {
	const [jobPositions, setjobPositions] = useState([])
	const [employers, setEmployers] = useState([])
	const [jobSekeers, setJobSekeers] = useState([])
	const [jobAdverts, setJobAdverts] = useState([])
   
	useEffect(() => {
		let jobPositionService = new JobPositionService()
		jobPositionService.getJobPositions().then(result => setjobPositions(result.data.data))
		let jobAdvertService = new JobAdvertService()
        jobAdvertService.getAllOpenTrueJobAdvertList().then(result => setJobAdverts(result.data.data))
		let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
		let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSekeers(result.data.data))
	}, [])
	

    return (

        <section className="footer_top_area p0">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-lg-2 pb25 pt25">
					<div className="logo-widget">
						<img className="img-fluid" src={logo} alt="header-logo.png"/>
					</div>
				</div>
				<div className="col-sm-12 col-lg-6 pb25 pt25 pl60 pr40 brdr_left_right">
					<div className="row">
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">{employers.length}</div>
								<p>İş Veren</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer" key={jobPositions.id}>{jobPositions.length}</div>
								<p>İş Pozisyonu</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">{jobAdverts.length}</div>
								<p>İş İlanı</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">{jobSekeers.length}</div>
								<p>İş Arayanlar</p>
							</div>
						</div>
						
					</div>
				</div>
				<div className="col-sm-12 col-lg-4 pb25 pt25 pl30">
					<div className="footer_social_widget mt15">
						<p className="float-left mt10">Follow Us : </p>
						<ul>
							<li className="list-inline-item"><a href=" "><i className="fa fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-instagram"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
