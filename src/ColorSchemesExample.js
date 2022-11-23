import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Products</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Billing</Nav.Link>
            <Nav.Link href="#pricing">Sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default ColorSchemesExample;
