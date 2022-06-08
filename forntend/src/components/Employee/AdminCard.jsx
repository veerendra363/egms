import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCard = (props) => {
  return (
    <div>
      <Card
        body
      >
        <Card.Title>{props.fname + props.lname}</Card.Title>
        <Card.Subtitle>Admin of {props.gdo}</Card.Subtitle>
        <Card.Text>
            Skills:<br />
         {props.skills}
        </Card.Text>
       <Link to={`../employee/${props.id}/0`}><Button >View Goals</Button></Link>{" "}
       <Link to={`../admin/${props.id}`}><Button >View Employees</Button></Link>

      </Card>
    </div>
  );
};

export default AdminCard;
