import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import "./LoginPageForm.css";
import Error from "../common/Error";
const LoginPageForm = ({onChange,errors,user,onSave})=>{
    return(
        <form className="container">
            <div className="form-group ">
                <TextInput name="email" label="Email" 
                onChange={onChange} error={errors.email}
                value={user.email}/>
                <TextInput name="password" label="Password" type="password"
                onChange={onChange} error={errors.password}
                value={user.password}
                autocomplete="current-password"/>
                <Error error={errors.failure} message="There seems to be a problem with either the
                email or password"/>
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