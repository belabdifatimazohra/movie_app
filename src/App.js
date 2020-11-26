import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import MovieList from './components/MovieList'
function App() {
  return (
    <div className="App">
      {/* NavBar App */}
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">Popular</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <MovieList />


      {/* Footer App */}
      <div className="copyright"> Copyright © 2020 movie.app , All Rights Reserved </div>
    </div>
  );
}

export default App;
