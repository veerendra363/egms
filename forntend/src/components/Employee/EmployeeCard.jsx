import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmployeeCard = (props) => {
  return (
    <div>
      <Card
        body
      >
        <Card.Title>{props.fname + props.lname}</Card.Title>
        <Card.Subtitle>Skills:</Card.Subtitle>
        <Card.Text>
         {props.skills}
        </Card.Text>
       <Link to={`../employee/${props.id}/0`}><Button >View Goals</Button></Link>
      </Card>
    </div>
  );
};

export default EmployeeCard;
