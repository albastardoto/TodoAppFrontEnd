import React from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import {CSSTransition} from "react-transition-group";
import "./Error.css";
const TextInput=({name,label,onChange,placeholder,value,error,type})=>{
  let wrapperClass="form-group";
  let status=false;
  if(error && error.length>0){
    wrapperClass+=" " +"has error";
    status=true;
  }


  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}/>
          <CSSTransition
          in={status}
          classNames="Error"
          unmountOnExit={true}
          timeout={200}>
          {state=> (
            <div className="alert alert-danger Error">{error}</div>
          ) }
          </CSSTransition>

      </div>
    </div>
  );
};
TextInput.propTypes={
  name:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value:PropTypes.string,
  error:PropTypes.string,
  type:PropTypes.string
};
export default TextInput;
