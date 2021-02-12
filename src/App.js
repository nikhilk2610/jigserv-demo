import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
