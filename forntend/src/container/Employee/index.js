import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";
import { deleteGoal, getGoalsByEmployeeId } from "../../APIS/Goals";
import GoalCard from "../../components/Goal";
import LogoutHeader from "../../components/Header/LogoutHeader";

const EmployeeContainer = () => {
  const dt = new Date();
  const [date, setDate] = useState(dt.toLocaleDateString('en-CA'))
  const [month, setMonth] = useState(dt.getMonth() + 1);
  const [year, setYear] = useState(dt.getFullYear());
  const [goals, setGoals] = useState([]);
  const { id, isVisible } = useParams();
  const [delCount, setDelCount] = useState(0)
  // console.log(`isVisible : ${isVisible}`)
  console.log(`delCount : ${delCount}`)

  const onDeleteGoalHandler = async (id) =>{
    const res = await deleteGoal(id)
    console.log(res)
    setDelCount(delCount+1)
  }
  useEffect(() => {
    async function getGoals() {
      console.log(` month: ${month} year: ${year}`);
      const data = await getGoalsByEmployeeId({ id, month, year });
      // console.log(data[0].Goals);
      if (data.length > 0) {
        setGoals(data[0].Goals);
      } else {
        setGoals([]);
      }
    }
    getGoals();
  }, [month, year, delCount]);
  return (
    <>
      <LogoutHeader />
      <h1>Employee Goals</h1>
      <label htmlFor="date">Date </label>
      <input
        type="date"
        name="username"
        id="username"
        value={date}
        onChange={(e) => {
          const dat = new Date(e.target.value);
          console.log(e);
          console.log(`date : ${dat}`);
          setDate(dat.toLocaleDateString('en-CA'))
          setMonth(dat.getMonth() + 1);
          setYear(dat.getFullYear());
        }}
      />
      <br />
      <br />
      <br />

      <Row xs={1} md={2} className="g-4">
        {goals.map((goal) => {
          goal = { isVisible, onDeleteGoalHandler, ...goal };
          return <GoalCard goal={goal} key={goal.id} />;
        })}
      </Row>
      {goals.length === 0 ? <p>Goals not found</p> : null}

      <Link to="/addgoal">
        <Button disabled={isVisible !== "1"}>Add Goal</Button>
      </Link>
      <Outlet />
    </>
  );
};

export default EmployeeContainer;
