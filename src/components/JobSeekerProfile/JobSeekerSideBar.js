import React from 'react'
import { Link } from 'react-router-dom'

export default function JobSeekerSideBar() {
    return (
        <div>
            <div className="user_profile">
                <div className="media">
                    <img src="images/team/8.jpg" className="align-self-start mr-3 rounded-circle" alt="8.jpg" />
                    <div className="media-body">
                        <h5 className="mt-0">Hi, Martha Griffin</h5>
                        <p>Bothell, WA, USA</p>
                    </div>
                </div>
            </div>
            <div className="dashbord_nav_list">
                <ul>
                
                   <Link to="/jobSeeker/profil"> <li><a ><span className="flaticon-profile"></span> Profil</a></li></Link>
                    <Link to="/jobSeeker/resume"><li className="active"><a ><span className="flaticon-resume"></span> Cv</a></li></Link>
                    <li><a ><span className="flaticon-paper-plane"></span> Başvurulan İlanlar</a></li>
                    <li><a><span className="flaticon-analysis"></span> CV Manager</a></li>
                    <li><a><span className="flaticon-favorites"></span> Favori İlanlar</a></li>
                    <li><a ><span className="flaticon-locked"></span> Parola değiştir</a></li>
                    <li><a ><span className="flaticon-logout"></span> Çıkış Yap</a></li>
                    <li><a ><span className="flaticon-rubbish-bin"></span> Profili Sil</a></li>
                </ul>
            </div>
        </div>
    )
}
