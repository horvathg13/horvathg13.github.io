import {FaLaravel, FaPhp, FaReact, FaVuejs} from "react-icons/fa";
import {SiMysql, SiPostgresql} from "react-icons/si";
import {useTranslation} from "react-i18next";

const AboutMe=()=>{
    const {t}=useTranslation();
    return(
        <div className="about-me-main">
            <h2>{t('aboutMe.title')}</h2>
            <div className="about flex">
                <div className="content-container">
                    <p>{t('aboutMe.paragraphs.first')}</p>
                    <p>{t('aboutMe.paragraphs.second')}</p>
                    <p> {t('aboutMe.paragraphs.third')}</p>
                </div>
                <div className="video-container">
                    <iframe width="90%" height="315"
                            src="https://www.youtube-nocookie.com/embed/Yw59hFTDHTw?si=WCS3QaQHAtW86czL"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )

}
export default AboutMe