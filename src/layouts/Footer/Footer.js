import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CityService from '../../services/CityService'
import JobPositionService from '../../services/JobPositionService'
import JobAdvertService from '../../services/JobAdvertService'




export default function Footer() {
	const [cities, setCities] = useState([])
	useEffect(() => {
		let cityService = new CityService()
		cityService.getCities().then(result => setCities(result.data.data))
	}, [])
	const [jobPositions, setjobPositions] = useState([])
	useEffect(() => {
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
								{cities.slice(0, 8).map((city) => (
									<Link to="/jobAdverts"><li><a key={city.id} href=" ">- {city.name}<i className="flaticon-right-arrow pl15"></i></a></li></Link>
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
									<li><a href=" ">{jobPosition.name}<i className="flaticon-right-arrow pl15"></i></a></li>
								))}
								<Link to="/jobAdverts"><a href=" " className="text-thm float-right">Tüm İlanlara Git <i className="flaticon-right-arrow pl15"></i></a></Link>

							</ul>
						</div>
					</div>
					<div className="col-sm-8 col-md-6 col-md-3 col-lg-4">
						<div className="newsletter_widget">
							<h4>Bülten</h4>
							<p>
								Yayınlanan en son işleri, adayları ve diğer en son haberleri almak için CareerUp  bültenine abone olun.</p>
							<form className="form-inline mailchimp_form">
								<label className="sr-only" htmlFor="inlineFormInputMail2">Name</label>
								<input type="email" className="form-control mb-2 mr-sm-2" id="inlineFormInputMail2" placeholder="Enter your email address" />
								<button type="submit" className="btn btn-primary mb-2"><span className="fa fa-paper-plane-o"></span></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>


	)
}
