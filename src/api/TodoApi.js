export function loadTodos(){
    return new Promise((resolve,reject)=>{
        let http = new XMLHttpRequest();
        http.onreadystatechange= function(){
            if(http.readyState===4 && http.status===200){
                resolve(JSON.parse(http.response.todos))
            }else{
                reject(new Error("something went wrong"));
            }
        };
        http.open("GET","https://still-wildwood-51429.herokuapp.com/todos",true);
        http.setRequestHeader("x-auth","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWI0MTg0M2NlNjk4YTAwMTQyYTIxNDMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIyMzMzMjYwfQ.qAYIYhlKUrU4BZYmHXZW6H1HXJrCa_huCK1f0wVMtcM");
        http.send();
    });
}