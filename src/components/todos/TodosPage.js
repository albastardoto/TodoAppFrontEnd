import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import * as todoActions from "../../actions/todoActions";
import {bindActionCreators} from "redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import toastr from "toastr";
import Spinner from "../common/Spinner";
class TodosPage extends React.Component{
        constructor(props,context){
        super(props,context);
        this.state={
            deletedTodos:[]
        }
        this.deleteTodo=this.deleteTodo.bind(this);
    }

    deleteTodo(id){
        let deletedTodos=this.state.deletedTodos;
        deletedTodos.push({id});
        this.setState(deletedTodos);
        this.props.actions.deleteTodo(id).then(null,(error)=>{
            deletedTodos.pop();
            this.setState(deletedTodos);
            if(error.message==="Request failed with status code 401"){

            }
            toastr.error("couldn't delete todo",null,{"positionClass": "toast-bottom-right"});
            
        });
    }

    render(){
        let loading=false;
        console.log(this.props.todos);
        if(this.props.ajaxCall>0 && this.props.todos.length===0){
            console.log("in if");
            loading=true;
        }
        let todos = this.props.todos;
        todos = todos.filter(todo=>{
            for(let restricted of this.state.deletedTodos){
                if(todo._id===restricted.id){
                    return false;
                }
            }
            return true;
        })
        const todoItems=todos.map((todo)=>{
        return(<Todo key={todo._id} id={todo._id} 
        name={todo.text} delete={this.deleteTodo}/>
        );
    })
        return(
            <section className="container">
                <h1 className="title">To-Dos</h1>
                <AddTodo></AddTodo> 
                    {todoItems}
                <Spinner loading={loading}/>
            </section>

        );
    }


}
TodosPage.propTypes={
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}
function mapStateToProps(state,ownProps){
    return{
        todos:state.todos,
        ajaxCall:state.numAjaxCallsInProgress
    };
}
function mapDispatchToProps(dispatch){
    return{
      actions:bindActionCreators(todoActions,dispatch)
    };
  }




export default connect(mapStateToProps,mapDispatchToProps)(TodosPage);
