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
            deletedTodos:[],
            addedTodo:[],
            todo:{
                text:""
            }
        }
        this.deleteTodo=this.deleteTodo.bind(this);
        this.createTodo=this.createTodo.bind(this);
        this.updateTodoState=this.updateTodoState.bind(this);
    }
    updateTodoState(event){
        const field= event.target.name;
        let todo=this.state.todo;
        todo[field]=event.target.value;
        return this.setState({todo});
    }
    deleteTodo(id){
        let deletedTodos=this.state.deletedTodos;
        deletedTodos.push({id});
        this.setState(deletedTodos);
        this.props.actions.deleteTodo(id).then(null,(error)=>{
            deletedTodos=deletedTodos.filter(todoId=>{
                return id!==todoId
            });
            this.setState(deletedTodos);
            if(error.message==="Request failed with status code 401"){

            }
            toastr.error("couldn't delete todo",null,{"positionClass": "toast-bottom-right"});
            
        });
    }

    createTodo(){
        console.log("creating");
        this.props.actions.createTodo({text:this.state.todo.text});
    }
    render(){
        let loading=false;
        if(this.props.ajaxCall>0 && this.props.todos.length===0){
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
        if(this.state.addedTodo.length>0){
            todos.push(this.state.addedTodo);
        }

        const todoItems=todos.map((todo)=>{
        return(<Todo key={todo._id} id={todo._id} 
        name={todo.text} delete={this.deleteTodo}/>
        );
    })
        return(
            <section className="container">
                <h1 className="title">To-Dos</h1>
                <AddTodo addTodoFN={this.createTodo} onChange={this.updateTodoState} todo={this.state.todo}></AddTodo> 
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
