import React from "react";

class AddTodo extends React.Component{
    render(){
        return(
            <div className="input-group mb-3">

              <input type="text" className="form-control" placeholder="add new todo" 
              xaria-label="" aria-describedby="basic-addon1"/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">submit</button>
              </div>
            </div>
        );
    }
}
export default AddTodo;