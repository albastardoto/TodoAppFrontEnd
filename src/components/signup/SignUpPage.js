import React from "react";
import SignUpForm from "./SignUpForm";
import toastr from "toastr";
import IsEmail from "isemail";
import {bindActionCreators} from "redux";
import * as userActions from "../../actions/userActions";
import {connect} from "react-redux";
class SignUpPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            user:{
                email:"",
                password:"",
                checkPassword:"",
            },
            errors:{
                failure:false,
                email:"",
                password:"",
                checkPassword:"",
            }
        };
        this.updateUserState=this.updateUserState.bind(this);
        this.saveUser=this.saveUser.bind(this);

    }
    updateUserState(event){
        const field= event.target.name;
        let user=this.state.user;
        user[field]=event.target.value;
        return this.setState({user});

    }
    saveUser(event){
        event.preventDefault();
        if(!this.userFormIsValid()){
            return;
        }
        let userData={
            email:this.state.user.email,
            password:this.state.user.password
        }
        console.log(userData);
        this.props.actions.signUp(userData).then(()=>{
            toastr.success("You signed up successfuly",null,{"positionClass": "toast-bottom-right"});
            this.props.history.push("/todos");
        },(err)=>{
            let errors=this.state.errors;
            if(err.message==="Request failed with status code 409"){
                errors.failure=true;
                this.setState({errors});
                return;
            }
            toastr.error("Something went wrong" ,null,{"positionClass": "toast-bottom-right"});
        });
    }
    userFormIsValid(){
        let valid = true;
        let errors={
            failure:false
        };
        if(!IsEmail.validate(this.state.user.email)){
            errors.email="Email is not valid.";
            valid=false;
        }
        if(this.state.user.password.length<8){
            errors.password=" Password must be at least 8 characters long";
            valid=false;
        }
        if(this.state.user.password!==this.state.user.checkPassword){
            errors.password=" Passwords must match";
            errors.checkPassword=" Passwords must match";
            valid=false;
        }
        this.setState({errors:errors});
        return valid;
    }

    render(){
        console.log(this.state.user);
        return(
            <div className="container">
            <h1>Sign Up</h1>
            <SignUpForm onChange={this.updateUserState} errors={this.state.errors}
            user={this.state.user} onSave={this.saveUser}/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
      actions:bindActionCreators(userActions,dispatch)
    };
}
export default connect(null,mapDispatchToProps)(SignUpPage);