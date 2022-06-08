import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getAdmins } from "../../APIS/Employees";
import AdminCard from "../../components/Employee/AdminCard";
import LogoutHeader from "../../components/Header/LogoutHeader";

const SuperAdminContainer = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getAdmins();
      console.log(data);
      setAdmins(data);
    }
    getData();
  }, []);
  return (
    <>
        <LogoutHeader />
      <h1>Admins</h1>
      <Row xs={1} md={2} className="g-4">
        {admins.map((admin) => {
          return <AdminCard {...admin}/>;
        })}
      </Row>
    </>
  );
};

export default SuperAdminContainer;
