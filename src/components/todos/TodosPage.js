import React from "react";
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import * as todoActions from "../../actions/todoActions";
import {bindActionCreators} from "redux";
import Todo from "./Todo";
class TodosPage extends React.Component{
    constructor(props,context){
        super(props,context);
    }


    render(){
        const todos = this.props.todos;
        const todoItems=todos.map((todo)=>{return <li key={todo._id}>{todo.text}</li>})
        return(
            <section>
                <h1>Todos</h1>
                <ul>
                    {todoItems}
                </ul>
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
        todos:state.todos
    };
}
function mapDispatchToProps(dispatch){
    return{
      actions:bindActionCreators(todoActions,dispatch)
    };
  }




export default connect(mapStateToProps,mapDispatchToProps)(TodosPage);
