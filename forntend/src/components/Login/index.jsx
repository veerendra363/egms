import { Card, Button } from "react-bootstrap";
import React from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import login from "../../APIS/Login";

const LoginCard = () => {
  const navigate = useNavigate();
  const {role } = useParams()
  console.log(role)
  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await login({role, ...values})
      if(res.accessToken){
        localStorage.setItem('token', res.accessToken)
        if(role === "Employee"){
          navigate(`../employee/${res.id}/1`)
        }
        if(role === "Admin"){
          navigate(`../admin/${res.id}`)
        }
        if(role === "Super Admin"){
          navigate("../superadmin")
        }
      }
      else{
      alert(res.message)
      }
    },
  });
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://thumbs.gfycat.com/AcclaimedZestyDuck-size_restricted.gif" />
        <Card.Body>
          <Card.Title>{role}</Card.Title>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="user_name">User Name</label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.user_name}
            />
            <br />
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <br /><br />
            <Button variant="primary" type="submit">
              Login
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginCard;
