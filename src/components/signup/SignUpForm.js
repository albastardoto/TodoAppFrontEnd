import React from "react";
import TextInput from "../common/TextInput";
import CSSTransition from "react-transition-group";
import Error from "../common/Error";
const SignUpForm=({onChange,errors,user,onSave})=>{
    return(
        <form>
            <div className="form-group ">
                <TextInput name="email" label="Email" 
                onChange={onChange} error={errors.email}
                value={user.email} autocomplete="email"/>
                <TextInput name="password" label="Password" type="password"
                onChange={onChange} error={errors.password}
                value={user.password}
                autocomplete="new-password"/>
                <TextInput name="checkPassword" label="Retype Password" type="password"
                onChange={onChange} error={errors.checkPassword}
                value={user.checkPassword} 
                autocomplete="new-password"/>
                
                <Error error={errors.failure} message="There seems to be a problem with either the
                email or password"/>
                <button className="btn btn-primary" type="submit" onClick={onSave}>Login</button>
            </div>
        </form>
    );  
}
export default SignUpForm;