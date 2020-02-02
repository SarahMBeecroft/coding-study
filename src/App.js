import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Library from "./pages/Library";
import InProgress from "./pages/InProgress";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";

// CSS
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <div className="row">
          <div className="col s12" id="paddingRemover">
            <Jumbotron></Jumbotron>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/inprogress" component={InProgress} />
          <Route exact path="/completed" component={Completed} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
