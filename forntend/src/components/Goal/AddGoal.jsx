import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addGoal } from "../../APIS/Goals";

const AddGoal = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: new Date(),
      status: "Not Started",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      status: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      const res = await addGoal(values);
      console.log(res);
      if (res.message === "Goal Added Successfully") {
        navigate("/employee");
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
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
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
        value={formik.values.date}
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
        checked="checked"
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddGoal;
