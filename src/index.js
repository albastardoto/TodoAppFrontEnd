import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/common/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './components/home/HomePage';
import TodosPage from './components/todos/TodosPage';
const Main = () =>(
    <main>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/todos" component={TodosPage}/>
        </Switch>
    </main>
)

ReactDOM.render(      
    <BrowserRouter className="App">
        <div>
            <Header/>
            <Main/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

