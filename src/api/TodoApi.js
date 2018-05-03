import axios from "axios";
axios.defaults.baseURL = 'https://still-wildwood-51429.herokuapp.com';

export function loadTodosAPI(){
    return new Promise((resolve,reject)=>{
        axios.get("/todos").then(res=>{
            resolve(res.data.todos);
        }).catch(error=>{
            reject(error);
        });
    });
}

export function login(data){
    return new Promise((resolve,reject)=>{
        console.log(data);
        return axios.post("/users/login",data).then((res)=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
export function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common["x-auth"]=token;
    }else{
        delete axios.defaults.headers.common["x-auth"];
    }
}