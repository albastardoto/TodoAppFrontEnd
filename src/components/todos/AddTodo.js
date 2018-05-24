import React from "react";

const AddTodo=({addTodoFN,onChange,todo})=>{
    return(
        <div className="input-group mb-3">

            <input type="text" className="form-control" placeholder="add new todo" 
            xaria-label="" aria-describedby="basic-addon1" onChange={onChange} name="text"
            value={todo.text}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={addTodoFN}>submit</button>
            </div>
        </div>
    );
}
export default AddTodo;