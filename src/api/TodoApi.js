import axios from "axios";
import jwt from "jsonwebtoken";
axios.defaults.baseURL = 'https://still-wildwood-51429.herokuapp.com';
export function loadTodosAPI(){
    return new Promise((resolve,reject)=>{
        axios.get("/todos").then(res=>{
            console.log(res);
            resolve(res.data.todos);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function login(data){
    return new Promise((resolve,reject)=>{
        return axios.post("/users/login",data).then((res)=>{
            const token=res.headers["x-auth"];
            localStorage.setItem("jwtToken",token);
            console.log(jwt.decode(token));
            setAuthorizationToken(token);
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

export function signUpAPI(data){
    return new Promise((res,reject)=>{
        return axios.post("/users",data).then((response)=>{
            console.log(response);
            const token = response.headers["x-auth"];
            localStorage.setItem("jwtToken",token);
            setAuthorizationToken(token);
            res(response);
        }).catch(err=>{
            reject(err);
        });
    })
}
export function deleteTodoAPI(id){
    return new Promise((resolve,reject)=>{
        return axios.delete("/todos/"+id).then((res)=>{
            resolve(id);
        }).catch(err=>{
            reject(err);
        })
    });
}

export function createTodoAPI(todo){
    return new Promise((res,rej)=>{
        return axios.post("/todos",todo).then((resp)=>{
            res(resp.data);
        }).catch(err=>{
            rej(err);
        });
    });
}


export function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common["x-auth"]=token;
    }else{
        delete axios.defaults.headers.common["x-auth"];
    }
}
