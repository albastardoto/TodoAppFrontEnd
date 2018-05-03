import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import {CSSTransition} from "react-transition-group";
import "./LoginPageForm.css";
const LoginPageForm = ({onChange,errors,user,onSave})=>{
    return(
        <form className="container">
            <div className="form-group ">
                <TextInput name="email" label="Email" 
                onChange={onChange} error={errors.email}
                value={user.email}/>
                <TextInput name="password" label="Password" type="password"
                onChange={onChange} error={errors.password}
                value={user.password}/>
                <CSSTransition
                          in={errors.failure}
                          classNames="Error"
                          unmountOnExit={true}
                          timeout={200}>
                {<p className="Error text-danger">There seems to be a problem with either your email or password</p>}
                </CSSTransition>
                <button className="btn btn-primary" type="submit" onClick={onSave}>Login</button>
            </div>
        </form>
    )
}
LoginPageForm.propTypes={
    onChange:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    onSave:PropTypes.func.isRequired,
    errors:PropTypes.object
}
export default LoginPageForm;