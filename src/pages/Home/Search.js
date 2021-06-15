import React from 'react'

export default function Search() {
    return (
      
        <section className="home-one parallax ulockd_bgih1" data-stellar-background-ratio="0.3">
		<div className="container">
			<div className="row home-content">
				<div className="col-lg-8">
					<div className="home-text">
						<h2 className="fz40">Hayatınıza Uygun İşi Bulun</h2>
						<p className="color-silver">Her ay 7 milyondan fazla iş arayan, iş aramak için web sitelerine başvuruyor ve her gün 160.000'den fazla başvuru yapıyor.</p>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="home-job-search-box mt20 mb20">
						<form className="form-inline">
							<div className="search_option_one">
							    <div className="form-group">
							    	<label htmlFor="exampleInputName"><span className="flaticon-search"></span></label>
							    	<input type="text" className="form-control h70" id="exampleInputName" placeholder="Kendine Uygun İş Bul"/>
							    </div>
							</div>
							<div className="search_option_two">
							    <div className="form-group">
							    	<label htmlFor="exampleInputEmail"><span className="flaticon-location-pin"></span></label>
							    	<input type="text" className="form-control h70" id="exampleInputEmail" placeholder="Şehir"/>
							    </div>
							</div>
							<div className="search_option_button">
							    <button type="submit" className="btn btn-thm btn-secondary h70">İş Bul</button>								
							</div>
						</form>
					</div>
					<p className="color-silver"><span className="color-white">Trend Anahtar Kelimeler :</span> DesignCer,  Developer,  Web,  IOS,  PHP,  Senior,  Engineer</p>
				</div>
			</div>
		</div>
	</section>
    )
}
