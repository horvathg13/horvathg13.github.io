import {Link, useParams} from "react-router-dom";
import projects from "../projects.json";
import {useEffect, useState} from "react";
import {
    FaArrowLeft,
    FaArrowRight, FaCogs,
    FaDocker,
    FaDownload, FaFileContract,
    FaGithub,
    FaLaravel, FaLink,
    FaPhp,
    FaReact, FaRegCommentDots, FaSearch, FaTasks,
    FaVuejs,
    FaChartLine,
    FaPlay
} from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Captions, Counter, Fullscreen, Slideshow, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {SiAuthelia, SiMysql, SiPostgresql, SiSemanticui} from "react-icons/si";
import {FaDiagramProject, FaShieldHalved, FaDisplay} from "react-icons/fa6";
import {AiOutlineNotification} from "react-icons/ai";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {IoLanguageSharp} from "react-icons/io5";

const Project=()=>{
let {projectId}=useParams();
let findProject = projects.find(e=>e.id === projectId);
const [open, setOpen]=useState(false);
const supportIconRender=(icon)=>{
    switch (icon) {
        case 'SiAuthelia':return <SiAuthelia />;
        case 'FaDiagramProject':return <FaDiagramProject />;
        case 'FaTasks':return <FaTasks />;
        case 'AiOutlineNotification':return <AiOutlineNotification />;
        case 'FaRegCommentDots':return <FaRegCommentDots />;
        case 'FaDocker': return <FaDocker/>
        case 'SiPostgresql':return <SiPostgresql />
        case 'FaSearch': return <FaSearch />
        case 'FaShieldHalved': return <FaShieldHalved/>
        case 'FaCogs': return <FaCogs />
        case 'FaFileContract': return <FaFileContract />
        case 'IoLanguageSharp': return <IoLanguageSharp />
        case 'FaChartLine': return <FaChartLine />
        default: return null;
    }
}
const {t}=useTranslation();
const translateAppSupport = t(`project.${findProject.name}.appSupport`, {returnObjects:true});
const linkButtons = t(`project.${findProject.name}.links`, {returnObjects:true});
const supportIconTitleRender=(icon)=>{
   let findTitle = translateAppSupport.find(i=>i.icon === icon);
   return findTitle.title
}
const linkContainerOnClickHandler=(click)=>{
    switch (click){
        case 'open': return setOpen(true)
        default: return null
    }
}
const techIconRender=(icon)=>{
    switch (icon){
        case 'FaVuejs':return <FaVuejs className="tech-icon" title="Vue3"/>
        case 'FaPhp':return <FaPhp className="tech-icon" title="Php"/>
        case 'FaLaravel': return <FaLaravel className="tech-icon" title="Laravel"/>
        case 'SiMysql': return <SiMysql className="tech-icon" title="Mysql"/>
        case 'FaDocker': return  <FaDocker className="tech-icon" title="Docker"/>
        case 'SiSemanticui':return <SiSemanticui className="tech-icon" title="SemanticUI"/>
        case 'FaGithub':return <FaGithub className="tech-icon" title="Github"/>
        case 'FaReact': return <FaReact className="tech-icon" title="React"/>
        default:return null
    }
}
const linkIconRender=(icon)=>{
    switch (icon){
        case 'FaDocker': return  <FaDocker className="btn-icon"/>
        case 'FaLink':return  <FaLink  className="btn-icon"/>
        case 'FaPlay':return <FaPlay />
        default: return null
    }
}
return(
    <div className="project-main">
        { findProject.update ? <div className="update-container">
            <div className="title">
                <h2>{t(`project.${findProject.name}.titles.update`)}: <span>v.{findProject.update.version}</span></h2>
            </div>
            <div className="update-description">
                {findProject.update.items.map(i=>
                    <li>{t(`project.${findProject.name}.update.${i}`)}</li>
                )}
            </div>
        </div>:null}
        <div className="description-container">
            <div className="title"><h2>{t(`project.${findProject.name}.titles.description`)}</h2></div>
            <p>{t(`project.${findProject.name}.paragraphs.first`)}</p>
            <div className="app-supports flex">
                {findProject.appSupport.map(i=>(
                    <div className="support block">
                        <div className="support-icon">{supportIconRender(i.icon)}</div>
                        <div className="support-description"><h3>{supportIconTitleRender(i.icon)}</h3></div>
                    </div>
                ))}
            </div>
        </div>
        <div className="technologies-container">
            <div className="title"><h2>{t(`project.${findProject.name}.titles.technologies`)}</h2></div>
            <div className="tech-icons flex">
                {findProject.techIcons.map(i=>techIconRender(i.icon))}
            </div>
        </div>
        <div className="link-container flex">
            {linkButtons.map((b,i)=>
                <Link
                    to={b.icon?(b.icon === 'FaDocker' || b.icon === 'FaPlay' ? `${findProject.docker}`:null) || (b.icon==='FaLink' ? `/documentations/${findProject.name}/${i18next.language}.pdf` : null) :null}
                    target={ b.icon ? "_blank" :null}>
                    <button key={i} type="button" onClick={() => linkContainerOnClickHandler(b.onClick)}>
                        {linkIconRender(b.icon)} {b.title}
                    </button>
                </Link>
            )}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={findProject.slides}
                plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom, Counter]}
                thumbnails={{position: "bottom"}}
            />
        </div>
    </div>
)
}
export default Project
