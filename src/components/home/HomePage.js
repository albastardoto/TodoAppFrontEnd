import React from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import reactsvg from "../../Images/React-icon.svg";
import nodesvg from "../../Images/Node.js_logo.svg";
import mongodbsvg from "../../Images/mongodb.svg";
import ScrollReveal from "scrollreveal";
import "font-awesome/css/font-awesome.min.css";
class HomePage extends React.Component{
    render(){
        
        return(
            <div className="everything">
                <div className="Landing">
                <div className="Title container-fluid">
                    <h1 className="text-center" >To-do</h1>
                    <p className="text-center"> organize your life</p>
                </div>
                </div>
                <div className="container-fluid subTitle ">
                    <h2 className="text-center ">Made with</h2>
                </div>
                <div className="container-fluid">
                    <div className="row powered ">
                        <div className="col-sm text-center react">

                        <i class="fa fa-desktop" aria-hidden="true"></i>
                        <h3>React</h3>
                        <p>a modern user interface library build by FaceBook to make fast, reliable and scalable applications</p>
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