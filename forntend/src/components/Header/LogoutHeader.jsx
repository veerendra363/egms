
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutHeader = () => {
  const navigate = useNavigate()
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>E G M S</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Button onClick={()=>{
               localStorage.removeItem('token')
               navigate("/")
           }}>Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default LogoutHeader