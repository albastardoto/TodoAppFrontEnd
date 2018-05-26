import React from "react";
import {PropTypes} from "prop-types";
import "./todo.css";
class Todo extends React.Component{
    deleteTodo(){
        this.props.delete(this.props.id);
    }
    render(){
        return(
            <div className="row todoRow">
            <div className="todo rounded border col-9 col-md-10 col-lg-11">
            {this.props.name}
            </div>
            
            <button onClick={this.deleteTodo.bind(this)} className="btn btn-outline-info col-3 col-md-2 col-lg-1">delete</button> 
            </div>
        );
    }
}
Todo.propTypes={
    name:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    delete:PropTypes.func.isRequired
}
export default Todo;