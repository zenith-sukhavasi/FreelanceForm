import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, RadioGroup } from "formik-mui";
import * as yup from "yup";

import React, { useRef, useState } from "react";
import { Box, Button, FormControlLabel, Radio } from "@mui/material";
import { DegreeButton } from "../Components/FormComponents/DegreeButton";
import { Stack } from "@mui/system";

export const Step2 = ({handleNext,data,handleSubmit}) => {
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
            <Stack spacing={2}>
            <label>
              <Field type="radio" component={<DegreeButton></DegreeButton>} name="picked" value="One" />
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
              component={TextField}
              label="Name"
              variant="standard"
            ></Field>
            <Field
              type="text"
              name="age"
              component={TextField}
              label="age"
              variant="standard"
            ></Field>
            <Button variant="contained" onClick={HandleClick} >
              nextStep
            </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};
