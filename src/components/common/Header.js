import React from "react";
import { NavLink} from "react-router-dom";
import {connect} from "react-redux";
class Header extends React.Component{

    constructor(props,context){
        super(props,context);
    }
    
    render(){
        return(            
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">To-Do</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    {this.props.loggedIn && <NavLink className="nav-link" to="#">Todos</NavLink>}
                </li>
                 {/* <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</NavLink>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <NavLink className="dropdown-item" to="#">Action</NavLink>
                    <NavLink className="dropdown-item" to="#">Another action</NavLink>
                    <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                    </div>
                </li>  */}
                </ul>
                <ul className ="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
};
function mapStateToProps(state,ownProps){
    return{
        loggedIn:state.loggedIn
    };
}


export default connect(mapStateToProps)(Header);