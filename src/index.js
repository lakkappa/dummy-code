import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Views/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
   <Route path="/" exact component={Dashboard} />
</Router>,
 document.getElementById('root')
);
