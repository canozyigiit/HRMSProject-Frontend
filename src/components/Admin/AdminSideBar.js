import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSideBar() {
    return (
        <div>
            <div className="user_profile">
                <div className="media">
                    <div className="media-body">
                        <h5 className="mt-0">Merhaba,Can Özyiğit</h5>
                        {/* Jwt ile düzenlenecek */}
                    </div>
                </div>
            </div>
            <div className="dashbord_nav_list">
                <ul>


                    <Link to="/admin/"><li><a ><span className="flaticon-profile"></span>Profil</a></li></Link>
                    <Link to="/admin/confirmEmployer"><li><a ><span className="flaticon-resume"></span> Onay Bekleyen İş Verenler</a></li></Link>
                    <Link to="/admin/confirmUpdateEmployer"><li><a><span className="flaticon-resume"></span> Onay Bekleyen İş Veren Güncellemeleri</a></li></Link>
                    <Link to="/admin/confirmJobAdvert"><li><a><span className="flaticon-resume"></span> Onay Bekleyen İş İlanları</a></li></Link>
                    <li><a><span className="flaticon-analysis"></span> Cv'ler</a></li>
                    <Link to="/admin/changePassword"><li><a ><span className="flaticon-locked"></span> Parola Değiştir</a></li></Link>
                    <Link to="/"><li><a><span className="flaticon-logout"></span> Çıkış Yap</a></li></Link>
                </ul>
            </div>
        </div>
    )
}
