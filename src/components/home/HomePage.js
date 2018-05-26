import React from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import ScrollReveal from "scrollreveal";
import "font-awesome/css/font-awesome.min.css";
import { NavLink} from "react-router-dom";
class HomePage extends React.Component{
    render(){
        
        return(
            <div className="everything">
                <div className="Landing">
                <div className="Title">
                    <h1 className="text-center" >To-do</h1>
                    <p className="text-center"> organize your life</p>
                    <NavLink className="btn btn-outline-info" to="/login">get started</NavLink>
                </div>
                </div>
                <div className="container subTitle ">
                    <h2 className="text-center">Made with</h2>
                </div>
                <div className="container-fluid">
                    <div className="row powered ">
                        <div className="col-sm text-center react">

                        <i className="fa fa-desktop" aria-hidden="true"></i>
                        <h3>React</h3>
                        <p>a modern user interface library built by FaceBook to make fast, reliable and scalable applications</p>
                        </div>
                        <div className="col-sm text-center node">
                        <i className="fa fa-server"></i>
                        <h3>Node.js</h3>
                        <p>a free open source server environment utilizing javascript</p>
                        </div>
                        <div className="col-sm text-center mongo">
                        <i className="fa fa-database"></i>
                        
                        <h3>MongoDB</h3>
                        <p>MongoDB is a free and open-source cross-platform document-oriented database program</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let sr= ScrollReveal();
        sr.reveal(".col-sm",{viewFactor:0.5,duration:500});
        sr.reveal(".subTitle");
    }
}



export default HomePage;