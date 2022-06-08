import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getEmployees } from "../../APIS/Employees";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import LogoutHeader from "../../components/Header/LogoutHeader";

const AdminContainer = () => {
  const [employees, setEmployees] = useState([]);
  const { id, } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getEmployees(id);
      console.log(data);
      setEmployees(data);
    }
    getData();
  }, []);
  return (
    <>
      <LogoutHeader />
      <h1>Employees</h1>
      <Row xs={1} md={2} className="g-4">
        {employees.map((employee) => {
          return <EmployeeCard {...employee}/>;
        })}
      </Row>
    </>
  );
};

export default AdminContainer;
