import { React, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {

  return (
        <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <MovieList />
          </Route>
          <Route path="/Detail/:id">
            <Detail />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
