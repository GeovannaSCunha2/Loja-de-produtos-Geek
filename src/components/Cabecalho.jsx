import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../assets/img/icon.png'

function Cabecalho() {
  return (
    <>
          <Navbar expand="md" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home"><img src={Icon} alt="" width={50} /> Shinzō Store</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Lojas</Nav.Link>
                  <Nav.Link href="#link">Novidades</Nav.Link>
                  <Nav.Link href="#link">Promoções</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  );
}

export default Cabecalho;