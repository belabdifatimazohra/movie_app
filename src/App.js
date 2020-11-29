import { React} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Description from "./components/Description";

function App() {

  return (
        <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/Description/:movie_id">
            <Description />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
