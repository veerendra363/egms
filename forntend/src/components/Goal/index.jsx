import { Button, Card, Col } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"



const GoalCard = (props) =>{
  // console.log(props)
  const navigate = useNavigate()
    const editGoalHandler = () =>{
      navigate({pathname:'/../editgoal', search:'hello', hash:'hash',...props})
    }
    // console.log(props)
    return (<Col>
    <Card>
      <Card.Body>
        <Card.Title>{props.goal.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.goal.status}</Card.Subtitle>
        <Card.Text>
          {props.goal.description}
        </Card.Text>
       {/* <Link to={`/editgoal/${props.goal.id}`} state={{id:1}}> */}
       {console.log(props.goal.isVisible)}
        <Link to='/../editgoal' state={{
          id: props.goal.id,
          title: props.goal.title,
          status: props.goal.status,
          description: props.goal.description,
          date: props.goal.date
        }} >  <Button variant="primary" disabled={props.goal.isVisible!=='1'}>Edit</Button></Link>{" "}
         {/* <Button variant="primary" onClick={editGoalHandler} disabled={props.goal.isVisible!=='1'}>Edit</Button>{" "} */}
         <Button variant="primary" onClick={() => props.goal.onDeleteGoalHandler(props.goal.id)} disabled={props.goal.isVisible!=='1'}>Del</Button>
         {/* </Link> */}
      </Card.Body>
    </Card>
  </Col>)
}

export default GoalCard