import projects from "../projects.json"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../loader";
const ProjectList=()=> {
    const navigate=useNavigate()
    const [loader, setLoader]=useState(true);

    return (
        <div className="project-list-main flex">
           {projects.sort((a, b) => a.id - b.id).map((e) =>
                <div key={e.id} className="project-card-main block" onClick={()=>{navigate(`/projects/${e.id}`)}}>
                    <div className="project-image">
                        <img src={e.img}/>
                    </div>
                    <div className="project-title"><h2>{e.name}</h2></div>
                </div>
            )}
        < /div>
    )
}
export default ProjectList