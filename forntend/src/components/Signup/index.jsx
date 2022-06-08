import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import signup from "../../APIS/Signup";
import { useNavigate } from "react-router-dom";
import { Button,} from "react-bootstrap";


const phoneRegEx = /^[0-9]{10}$/;
const passwordRegEx = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{8,50}$/;

const SignupForm = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone_number: "",
      skills: "",
      role: "",
      gdo: "",
      user_name: "",
      password: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string().required("Required"),
      lname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone_number: Yup.string().matches(
        phoneRegEx,
        "Phone number is not valid"
      ),
      skills: Yup.string().required("Required"),
      role: Yup.string().required("Required"),
      gdo: Yup.string().required("Required"),
      user_name: Yup.string().min(8, 'User name must be 8 characters or more')
      .required("Required"),
      password: Yup.string().matches(passwordRegEx, 'Password must conatin number, symbol, lowercase and uppercase letter. Min length is 8')
      .required("Required")
    }),
    onSubmit:async (values) => {
      const res = await signup(values)
      console.log(res)
      if(res.message === "Successfully Registered"){
          navigate("/")
      }
      else{
          alert(JSON.stringify(res))
      }
    },
  });
  return (
    <div class="form-center">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fname">First Name</label><br />
      <input
        id="fname"
        name="fname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fname}
      />
      {formik.touched.fname && formik.errors.fname ? (
         <div>{formik.errors.fname}</div>
       ) : null}
       <br />
      <label htmlFor="lname">Last Name</label><br />
      <input
        id="lname"
        name="lname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lname}
      />
      {formik.touched.lname && formik.errors.lname ? (
         <div>{formik.errors.lname}</div>
       ) : null}
      <br />
      <label htmlFor="email">Email Address</label><br />
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
      <br />
      <label htmlFor="phone_number">Phone Number</label><br />
      <input
        id="phone_number"
        name="phone_number"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone_number}
      />
      {formik.touched.phone_number && formik.errors.phone_number ? (
         <div>{formik.errors.phone_number}</div>
       ) : null}
      <br />
      <label htmlFor="skills">Skills</label><br />
      <input
        id="skills"
        name="skills"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.skills}
      />
      {formik.touched.skills && formik.errors.skills ? (
         <div>{formik.errors.skills}</div>
       ) : null}
      <br />
      <label htmlFor="role">Role</label>
      <br />
      <input
        id="employee"
        name="role"
        type="radio"
        onChange={formik.handleChange}
        value="Employee"
      />
      Employee
      {" "}
      <input
        id="admin"
        name="role"
        type="radio"
        onChange={formik.handleChange}
        value="Admin"
      />
      Admin
      {" "}
      <input
        id="superAdmin"
        name="role"
        type="radio"
        onChange={formik.handleChange}
        value="Super Admin"
      />
      Super Admin
      {formik.touched.role && formik.errors.role ? (
         <div>{formik.errors.role}</div>
       ) : null}
      <br />
      <label htmlFor="gdo">GDO</label>
      <br />
      <input
        id="gdo1"
        name="gdo"
        type="radio"
        onChange={formik.handleChange}
        value="GDO1"
      />
      GDO1
      {"  "}
      <input
        id="gdo2"
        name="gdo"
        type="radio"
        onChange={formik.handleChange}
        value="GDO2"
      />
      GDO2
      {"  "}
      <input
        id="gdo3"
        name="gdo"
        type="radio"
        onChange={formik.handleChange}
        value="GDO3"
      />
      GDO3
      {"  "}
      <input
        id="gdo4"
        name="gdo"
        type="radio"
        onChange={formik.handleChange}
        value="GDO4"
      />
      GDO4
      {"  "}
      <input
        id="all"
        name="gdo"
        type="radio"
        onChange={formik.handleChange}
        value="ALL"
      />
      ALL
      {formik.touched.gdo && formik.errors.gdo ? (
         <div>{formik.errors.gdo}</div>
       ) : null}
      <br />
      <label htmlFor="user_name">User Name</label><br />
      <input
        id="user_name"
        name="user_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.user_name}
      />
      {formik.touched.user_name && formik.errors.user_name ? (
         <div>{formik.errors.user_name}</div>
       ) : null}
      <br />
      <label htmlFor="password">Password</label><br />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
      <br /><br />
      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default SignupForm;
