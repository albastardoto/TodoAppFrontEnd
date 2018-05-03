import React from "react";
import PropTypes from "prop-types";
import "./Error.css";

const Error = ({error})=>{
    return(
        <div>
            <div className="alert alert-danger">{error}</div>
        </div>
    );
}
Error.propTypes={
    error:PropTypes.string.isRequired
}
export default Error;