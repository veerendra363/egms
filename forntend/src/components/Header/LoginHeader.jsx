import { Container, Nav, Navbar } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{cursor:'pointer'}}  onClick={() => {
                  navigate("/");
                }}>E G M S</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link onClick={()=>{
            navigate('/signup')
          }}>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginHeader;
