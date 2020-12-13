import React, { useState } from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar() {
  // Search Movie State
  const [search, setSearch] = useState();
  const history = useHistory();
  return (
    <div className="header">
      {/* NavBar App */}
      {/* <Navbar  bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Nav>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              {" "}
              <Link to="/">Movies</Link>{" "}
            </Nav>
            <Nav>
              <Link to="/toprated">Top Rated </Link>
            </Nav>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="outline-info"
              onClick={() =>
                history.push(`/search/${search}`, { search: search })
              }
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> */}

      <Navbar bg="light" expand="lg">
  <Navbar.Brand > Movie App </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
              <Nav
            className="mr-auto"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Nav>
              <Link to="/">Home</Link>
            </Nav>
            <Nav>
              {" "}
              <Link to="/">Movies</Link>{" "}
            </Nav>
            <Nav>
              <Link to="/toprated">Top Rated </Link>
            </Nav>
          </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default NavBar;
