import { Link } from "react-router-dom";
import "./Header.css";
const Header = () =>{
    return (
        <div className=" header">
    <header className=" d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4 navlogo">legalSathi</span>
      </a>

      <ul className="nav nav-pills">
      <li className="nav-item"><Link to="/join" className="nav-link navlink join" aria-current="page"><b>JOIN</b></Link></li>
        <li className="nav-item"><Link to="/home" className="nav-link navlink" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link navlink">About</Link></li>
        <li className="nav-item"><Link to="/pricing" className="nav-link navlink">Pricing</Link></li>
        <li className="nav-item"><Link to="/lawyers" className="nav-link navlink">Talk to lawyers</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link navlink">Login</Link></li>
        <li className="nav-item"><Link to="/signup" className="nav-link navlink">SignUp</Link></li>
      </ul>
    </header>
  </div>
    )
}

export default Header;
