import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Meie aasta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Avaleht</Nav.Link>
            <Nav.Link href="#link">Meie lugu</Nav.Link>
            <NavDropdown title="Võimalused" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Raamat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Äpp
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Täida veebis</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Kinkekaart
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;