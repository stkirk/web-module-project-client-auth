import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Friends from "./components/Friends";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
