import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import CreateCard from "./components/CreateCard";
import EditCard from "./components/EditCard";

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
      <Route path="/edit/:id">
        <EditCard />
      </Route>


    </Router>

    

  ) 

}

export default App;
