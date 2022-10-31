import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, RadioGroup } from "formik-mui";
import * as yup from "yup";

import React, { useRef, useState } from "react";
import { Button, FormControlLabel, Radio } from "@mui/material";

export const Step2F = ({handleNext,data,handleSubmit}) => {
  const ref = useRef(null);
 const HandleClick =()=>{
  console.log(ref.current.values)
  handleSubmit(ref.current.values);
 }
 
  return (
    <div>
      <Formik
      innerRef={ref}
        initialValues={data}
        enableReinitialize={true}
        validationSchema={yup.object({
          name: yup.string().required("enter name"),
          picked: yup.string().required("select  one"),
          age: yup.number().required("enter age"),
        })}
        onSubmit={handleSubmit}
      >
        {({isSubmitting,isValid}) => (
          <Form>
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <ErrorMessage className="Error" component='p' name="picked"></ErrorMessage>
            <Field
              type="text"
              name="name"
              disabled={false}
              component={TextField}
              label="Name"
              variant="standard"
            ></Field>
            <Field
              type="text"
              name="age"
              disabled={false}
              component={TextField}
              label="age"
              variant="standard"
            ></Field>
            <Button variant="contained" type="submit"  >
              nextStep
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
