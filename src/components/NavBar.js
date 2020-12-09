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
        <Nav className="mr-auto" style={{display:"flex" , justifyContent:"space-between"}}>
          <Nav>
            <Link to="/">Home</Link>
          </Nav>
          <Nav> <Link to="/">Movies</Link> </Nav>
          <Nav><Link to="/toprated">Top Rated </Link></Nav>
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
