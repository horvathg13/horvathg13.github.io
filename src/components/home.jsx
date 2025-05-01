import {FaDocker, FaDownload, FaLaravel, FaLink, FaPhp, FaReact, FaVuejs} from "react-icons/fa";
import {SiMysql, SiPostgresql} from "react-icons/si";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import Loader from "../loader";
import i18next from "i18next";

const Home=()=>{
    const {t}=useTranslation();
    return(
        <>
        <div className="home-main-container">

            <div className="image-container"> </div>
            <div className="greeting-container">
                <div className="greeting">
                    <h1>{t('greeting.titles.name')}</h1>
                    <h2>{t('greeting.titles.position')}</h2>
                </div>
                <div className="cv-container">
                    <button onClick={()=>window.open(`/cvs/cv_${i18next.language}.pdf`, "_blank")}><FaLink className="btn-icon"/>{t('greeting.cvButton.title')}</button>
                </div>

                <div className="skills flex">
                    <FaReact title="React"/>
                    <FaVuejs title="Vue3"/>
                    <FaPhp title="Php"/>
                    <FaLaravel title="Laravel"/>
                    <SiMysql title="Mysql"/>
                    <SiPostgresql title="Postgresql"/>
                    <FaDocker title="Docker"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;