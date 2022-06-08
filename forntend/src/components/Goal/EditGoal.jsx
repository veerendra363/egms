import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import {  editGoal } from "../../APIS/Goals";

const EditGoal = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  console.log(state)
  const formik = useFormik({
    initialValues: {
      title: state.title,
      description: state.description,
      date: state.date,
      status: state.status,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      status: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      const res = await editGoal(values, state.id);
      console.log(res);
      if (res.message === "Goal Updated Successfully") {
        navigate(-1);
      } else {
        alert(JSON.stringify(res));
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}

      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <br />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        type="text "
        placeholder={state.description}
        onChange={formik.handleChange}
        value={formik.values.description}
      ></textarea>
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}
      <br />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={new Date(formik.values.date).toLocaleDateString('en-CA')}
      />
      {formik.touched.date && formik.errors.date ? (
        <div>{formik.errors.date}</div>
      ) : null}
      <br />
      <label htmlFor="status">Status</label>
      <br />
      <input
        id="not-started"
        name="status"
        type="radio"
        onChange={formik.handleChange}
        value="Not Started"
      />
      Not statred
      <br />
      <input
        id="inprogress"
        name="status"
        type="radio"
        onChange={formik.handleChange}
        value="Inprogress"
      />
      Inprogress
      <br />
      <input
        id="completed"
        name="status"
        type="radio"
        onChange={formik.handleChange}
        value="Completed"
      />
      Completed
      <br />
      <input
        id="failed"
        name="status"
        type="radio"
        onChange={formik.handleChange}
        value="Failed"
      />
      Failed
      <br />
      {formik.touched.status && formik.errors.status ? (
        <div>{formik.errors.status}</div>
      ) : null}
      <br />
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditGoal;
