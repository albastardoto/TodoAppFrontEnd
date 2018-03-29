import React,{PropTypes} from "react";
import { NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
const Header=()=>{

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light container-fluid">
        <NavLink className="navbar-brand" to="/">Todos</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container-fluid " id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/todos">Todos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="#">Pricing</NavLink>
            </li>
            </ul>
            <ul className="navbar-nav pull right">
                <li className="nav-item justify-content-end">
                    <NavLink className="nav-link " to="#">Log In</NavLink>
                
                </li>
                <li>
                    <NavLink className="nav-link" to="#">Sign Up</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
};
export default Header;