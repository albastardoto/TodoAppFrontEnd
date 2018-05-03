import React from "react";
import "./HomePage.css";
//import {Jumbotron, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
class HomePage extends React.Component{
    render(){
        return(
            <div>
                <div className="Landing">
                    <h1 className="Title text-center display-2">To-do</h1>
                </div>
            </div>
        )
    }
}
export default HomePage;