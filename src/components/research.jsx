import {useNavigate} from "react-router-dom";
import research from "../research.json";

const Research = () => {
    const navigate = useNavigate();
    return (
        <div className="project-list-main flex">
            {research.map((e, index) => (
                <div className="project-card-main research block" key={index} onClick={() => window.open(`${e.link}`, "_blank")}>
                    <div className="project-image">
                        <img src={e.img} alt={e.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Research