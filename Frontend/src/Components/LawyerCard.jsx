import { Link } from "react-router-dom";
import "./LawyerCard.css";

const LawyerCard = ({lawyerName, experience, tags}) =>{
    return(
        <div className="col-lg-3 lawyerCard">
        <svg className="bd-placeholder-img rounded-circle"width="80" height="80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 className="fw-normal"><Link to="/lawyers/${lawyerName}" style={{textDecoration: "none"}}>{lawyerName}</Link></h4>
        <p><strong>Experience:</strong>{experience}</p>
        <p><strong>Tags:</strong>{tags}</p>
        <p className="talkBtn" ><Link to="#" style={{textDecoration: "none", color: "white"}}>Talk</Link></p>
      </div>
    )
}

export default LawyerCard;