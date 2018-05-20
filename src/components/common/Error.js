import React from "react";
import PropTypes from "prop-types";
import "./Error.css";
import {CSSTransition} from "react-transition-group";
const Error = ({error,message})=>{
    return(
        <div>
        <CSSTransition
        in={error}
        classNames="Error"
        unmountOnExit={true}
        timeout={200}>
        {<p className="Error text-danger">{message}</p>}
        </CSSTransition>
        </div>
    );
}
Error.propTypes={
    error:PropTypes.bool.isRequired,
    message:PropTypes.string.isRequired
}
export default Error;