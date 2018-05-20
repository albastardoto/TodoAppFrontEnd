import React from "react";
import {PropTypes} from "prop-types";
import "./todo.css";
class Todo extends React.Component{
    deleteTodo(){
        this.props.delete(this.props.id);
    }
    render(){
        return(
            <div className="todo container rounded border d-block">
            {this.props.name}
            <button onClick={this.deleteTodo.bind(this)} className="btn btn-danger float-right">delete</button>
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