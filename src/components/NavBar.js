import React, { useState } from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar() {
  // Search Movie State
  const [search, setSearch] = useState();
  const history = useHistory();
  return (
    <div>
      {/* NavBar App */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>Movie App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link> <Link to="/">Movies</Link> </Nav.Link>
          <Nav.Link><Link to="/toprated">Top Rated </Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-info" onClick={()=> history.push(`/search/${search}`,  {search:search})}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
