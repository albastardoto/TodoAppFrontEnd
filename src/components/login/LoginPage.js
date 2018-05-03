import React from "react"
import LoginPageForm from "./LoginPageForm";
import * as IsEmail from "isemail";
import {bindActionCreators} from "redux";
import * as userActions from "../../actions/userActions";
import {connect} from "react-redux";
import toastr from "toastr";
class LoginPage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            user:{
                email:"",
                password:""
            },
            errors:{
                failure:false
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
        this.props.actions.signIn(this.state.user).then(()=>{
            toastr.success("You logged in successfuly",null,{"positionClass": "toast-bottom-right"});
        },(err)=>{
            if(err.message==="Request failed with status code 401"){
                let errors=this.state.errors;
                errors.failure=true;
                this.setState(errors);
                console.log(this.state);
                return;
            }
            toastr.error("Something went wrong"+ err.message ,null,{"positionClass": "toast-bottom-right"});
        });
    }
    userFormIsValid(){
        let valid = true;
        let errors={
            title:""
        };
        if(!IsEmail.validate(this.state.user.email)){
            errors.email="Email is not valid.";
            valid=false;
        }
        if(this.state.user.password.length<8){
            errors.password=" Password must be at least 8 characters long";
            valid=false;
        }
        this.setState({errors:errors});
        return valid;
    }



    render(){
        return(
            <div className="container mt-5">
            <LoginPageForm onChange={this.updateUserState} errors={this.state.errors}
            user={this.state.user} onSave={this.saveUser}/>
            </div>
        )
    }
};
function mapDispatchToProps(dispatch){
    return{
      actions:bindActionCreators(userActions,dispatch)
    };
}
export default connect(null,mapDispatchToProps)(LoginPage);