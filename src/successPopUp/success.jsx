import {GoCheckCircle} from "react-icons/go";
import {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import {FaCircleCheck} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa6";

const Success=({success})=>{
    const nodeRef = useRef(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={success} classNames="success" timeout={500} mountOnEnter unmountOnExit>
            <div className="transition-container" ref={nodeRef}>
                <FaCheck   className='success'/>
            </div>
        </CSSTransition>
    );

}
export default Success