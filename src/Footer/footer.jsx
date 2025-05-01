import {FaDocker, FaFacebook, FaGithub, FaLaravel, FaLinkedin, FaPhp, FaReact, FaVuejs} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {SiGmail, SiMysql, SiPostgresql} from "react-icons/si";
import {useLocation, useNavigate} from "react-router-dom";

const Footer=()=>{
    const location =useLocation();
    const navigate=useNavigate();
    return(
        <div className="footer-main-container">
            <div className="get-in-touch flex">
            <div className="social-media flex">
                <FaFacebook onClick={()=>window.open("https://www.facebook.com/gabor.horvath.18041?locale=hu_HU", "_blank")} className="icon" title="Facebook"/>
                <FaGithub onClick={()=>window.open("https://github.com/horvathg13", "_blank")} className="icon" title="Github"/>
                <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/gábor-horváth-8230a1290", "_blank")} className="icon" title="LinkedIn"/>
                <SiGmail onClick={()=>navigate("/contact")} className="icon" title="Gmail"/>
            </div>
                {location.pathname !== "/" ? <div className="footer-skills flex">
                <FaReact className="skill-icon" title="React"/>
                <FaVuejs className="skill-icon" title="Vue3"/>
                <FaPhp  className="skill-icon"title="Php"/>
                <FaLaravel  className="skill-icon" title="Laravel"/>
                <SiMysql className="skill-icon" title="Mysql"/>
                <SiPostgresql className="skill-icon" title="Postgresql"/>
                <FaDocker className="skill-icon" title="Docker"/>
            </div>:null}
            </div>
        </div>
    )
}
export default Footer