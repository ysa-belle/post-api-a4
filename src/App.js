import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import CreateCard from "./components/CreateCard";

function App() {
  return(
    <Router>
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/cards">
        <Cards />
      </Route>

      <Route path="/create">
        <CreateCard />
      </Route>
    </Router>

  ) 

}

export default App;
