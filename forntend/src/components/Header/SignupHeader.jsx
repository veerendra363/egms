import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignupHeader = () => {
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
            <NavDropdown title="Login as" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login/Employee");
                }}
              >
                Employee
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login/Admin");
                }}
              >
                Admin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login/Super Admin");
                }}
              >
                Super Admin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SignupHeader;
