import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/common/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './components/home/HomePage';
import TodosPage from './components/todos/TodosPage';
import {loadTodos} from "./actions/todoActions";
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux'
import LoginPage from './components/login/LoginPage';
const Main = () =>(
    <main>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/todos" component={TodosPage}/>
            <Route exact path="/login" component={LoginPage}/>
        </Switch>
    </main>
)
const store= configureStore();
store.dispatch(loadTodos());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter className="App">
            <div>
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

