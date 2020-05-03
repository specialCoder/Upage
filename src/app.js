import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound/index.jsx";
import Home from "./pages/Home/index.jsx";

const App = ()=>{
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>);
};

export default ReactDOM.render(<App/>,window.document.getElementById("app"));