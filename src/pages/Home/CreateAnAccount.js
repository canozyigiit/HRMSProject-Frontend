import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateAnAccount() {
    return (
        <section className="divider home5">
		<div className="container">
			<div className="row">
				<div className="col-lg-9 offset-lg-2 text-center">
					<h1 className="color-white">Online Özgeçmişinizle Fark Yaratın!</h1>
					<p className="color-white">HRMS özgeçmiş asistanı ile dakikalar içinde özgeçmişiniz hazır!</p>
					<Link to="/login"><a href=" " className="btn-success btn-thm divider-btn mt30" >Hesap oluştur</a></Link>
				</div>
			</div>
		</div>
	</section>
    )
}
