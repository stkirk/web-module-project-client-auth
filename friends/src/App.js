import "./App.css";
import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <h1>Friends</h1>
      <Landing />
    </div>
  );
}

export default App;
