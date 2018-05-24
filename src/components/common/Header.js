import React from "react";
import { NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../actions/userActions";
import { withRouter } from "react-router";
class Header extends React.Component{

    constructor(props,context){
        super(props,context);
        this.LogOut=this.LogOut.bind(this);
    }
    LogOut(){
        this.props.actions.logOut();
    };
    render(){
        return(            
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" strict to="/">To-Do</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    {this.props.loggedIn && <NavLink activeClassName="active" className="nav-link" to="/todos">Todos</NavLink>}
                </li>
                </ul>
                <ul className ="navbar-nav ml-auto">
                    <li className="nav-item ">
                        {!this.props.loggedIn && <NavLink  activeClassName="active" className="nav-link" to="/login">Login</NavLink>}
                        {this.props.loggedIn && <a className="nav-link" href="/" onClick={this.LogOut} >Log Out</a>}
                    </li>
                    <li className="nav-item">
                    {!this.props.loggedIn && <NavLink activeClassName="active" className="nav-link" to="/signup">Sign Up</NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
};
function mapStateToProps(state,ownProps){
    return{
        loggedIn:state.user.loggedIn
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(userActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));