import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../assets/images/404.png"

export default function NotFoundPage() {
    return (
        <section class="our-error bgc-fa">
		<div class="container">
			<div class="row">
				<div class="col-lg-10 offset-lg-1 text-center">
					<div class="error_page newsletter_widget">
						<div class="erro_code"><img class="img-fluid" src={Image} alt="404.png"/></div>
						<h4>Üzgünüz, Sayfa Bulunamadı</h4>
						<Link to="/"><p>Maalesef aradığınız sayfa bulunamadı. Geçici olarak kullanılamayabilir, taşınmış olabilir veya artık mevcut olmayabilir. Girdiğiniz URL'de herhangi bir hata olup olmadığını kontrol edin ve tekrar deneyin.</p></Link>
						
					</div>
					<Link to="/"><a class="text-thm mt25" >Ana Sayfaya Git  <span class="flaticon-right-arrow pl10"></span></a></Link>
				</div>
			</div>
		</div>
	</section>
    )
}
