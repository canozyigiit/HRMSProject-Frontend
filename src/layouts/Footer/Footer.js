import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CityService from '../../services/CityService'
import JobPositionService from '../../services/JobPositionService'
import JobAdvertService from '../../services/JobAdvertService'




export default function Footer() {
	const [cities, setCities] = useState([])
	const [jobPositions, setjobPositions] = useState([])
	useEffect(() => {
		let cityService = new CityService()
		cityService.getCities().then(result => setCities(result.data.data))
		let jobPositionService = new JobPositionService()
		jobPositionService.getJobPositions().then(result => setjobPositions(result.data.data))
	}, [])


	return (
		<section className="footer_one">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-3 col-lg-2">
						<div className="quick_link_widget">
							<h4>Hızlı Linkler</h4>
							<ul className="list-unstyled">
								<Link to="/jobAdverts"><li><a href=" ">Tüm İş İlanları<i className="flaticon-right-arrow pl15"></i></a></li></Link>
								<Link to="/employers"><li><a href=" ">İş Verenler<i className="flaticon-right-arrow pl15"></i></a></li></Link>
								<Link to="/jobSeekers"><li><a href=" ">İş Arayanlar<i className="flaticon-right-arrow pl15"></i></a></li></Link>
								<Link to="/"><li><a href=" ">İlan Ver<i className="flaticon-right-arrow pl15"></i></a></li></Link>
							</ul>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-md-3 col-lg-3">
						<div className="candidate_widget">
							<h4>Şehirlere Göre İlanlar</h4>
							<ul className="list-unstyled">
								{cities.splice(0, 5).map((city) => (
									<Link to="/jobAdverts"><li key={city.id}  ><a >- {city.name}<i className="flaticon-right-arrow pl15"></i></a></li></Link>
								))}
								<Link to="/jobAdverts"><a href=" " className="text-thm float-right">Tüm İlanlara Git<i className="flaticon-right-arrow pl15"></i></a></Link>
							</ul>
						</div>
					</div>
					<div className="col-sm-4 col-md-4 col-md-3 col-lg-3">
						<div className="employe_widget">
							<h4>Pozisyonlara Göre İlanlar</h4>
							<ul className="list-unstyled">
								{jobPositions.map((jobPosition) => (
									<li key={jobPosition.id}><a >{jobPosition.name}<i className="flaticon-right-arrow pl15"></i></a></li>
								))}
							</ul>
							<Link to="/jobAdverts"><a  className="text-thm float-right">Tüm İlanlara Git <i className="flaticon-right-arrow pl15"></i></a></Link>

						</div>
					</div>
					<div className="col-sm-8 col-md-6 col-md-3 col-lg-4">

						{/* <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="tr_TR" data-type="vertical" data-theme="dark" data-vanity="can-özyiğit-884568200">
							<a className="LI-simple-link" href='https://tr.linkedin.com/in/can-%C3%B6zyi%C4%9Fit-884568200?trk=profile-badge'>Can Özyiğit</a>
						</div> */}
					</div>
				</div>
			</div>
		</section>


	)
}
