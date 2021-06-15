import React from 'react'
import logo from '../../assets/images/header-logo.png'
export default function FooterTopArea() {
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
								<div className="timer">2,395</div>
								<p>Jobs Added</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">1,267</div>
								<p>Jobs Posted</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">1,095</div>
								<p>Companies</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
							<div className="funfact_one">
								<div className="timer">7,348</div>
								<p>Freelancer</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-lg-4 pb25 pt25 pl30">
					<div className="footer_social_widget mt15">
						<p className="float-left mt10">Follow Us</p>
						<ul>
							<li className="list-inline-item"><a href=" "><i className="fa fa-facebook"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-twitter"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-instagram"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-pinterest"></i></a></li>
							<li className="list-inline-item"><a href=" "><i className="fa fa-dribbble"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}
