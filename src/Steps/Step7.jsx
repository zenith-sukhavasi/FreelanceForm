import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { TextField, RadioGroup, Select } from "formik-mui";
import * as yup from "yup";
import { MenuItem, Grid, Button } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { aboutus, FamilyIncome, months, TutionFee, years } from "../Data/Data";
import { FormContext } from "../Data/FormContext";
import axios from "axios";

export const Step7 = ({ data, handleSubmit }) => {
  const { form, setForm, handleSubmit2 } = useContext(FormContext);
  console.log("form", form);
  const formRef = useRef();
  const handleChange2 = async (e, setFieldValue, submitForm) => {
    console.log("handleChange2", formRef.current);
    await setFieldValue("value", e.target.value, false); // last argument prevents validation from running
    submitForm();
  };
  useEffect(() => {
    console.log("useEfferct", formRef.current);
    handleSubmit2(formRef);
  }, [formRef.current?.values]);

  async function otpHandler() {
    console.log("first");
    const headers = {
      "Content-Type": "application/json",
    };
    // set 10 digit number in body
    const body = {
      mobilenumber: "7207486170",
    };
    try {
      const response = axios.get(`http://127.0.0.1:8000/api/otp`, {
        headers,
        params: body,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="form7">
      <Formik
        innerRef={formRef}
        initialValues={form}
        enableReinitialize={true}
        validationSchema={yup.object({
          PersonalInformation: yup.object({
            FirstName: yup.string().required("This Field is Required"),
            LastName: yup.string().required("This Field is Required"),
            PhoneNumber: yup.number().required("This Field is Required"),
            OTP: yup.number().required("This Field is Required"),
            EmailAddress: yup
              .string()
              .email("enter valid email address")
              .required("This Field is Required"),
            PhysicalAddress: yup.string().required("This Field is Required"),
          }),
        })}
        onSubmit={(e) => {
          handleSubmit(e, 5);
        }}
      >
        {({
          isSubmitting,
          isValid,
          dirty,
          values,
          submitForm,
          setFieldValue,
        }) => (
          <Form>
            <h3>Personal Information</h3>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  fullWidth
                  name="PersonalInformation.FirstName"
                  component={TextField}
                  disabled={false}
                  label="FirstName"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  fullWidth
                  name="PersonalInformation.LastName"
                  component={TextField}
                  disabled={false}
                  label="LastName"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="number"
                  fullWidth
                  name="PersonalInformation.PhoneNumber"
                  component={TextField}
                  disabled={false}
                  label="PhoneNumber"
                  //variant="standard"
                ></Field>
                <Button variant="contained" sx={{ m: 2 }} onClick={otpHandler}>
                  send otp
                </Button>
                <Field
                  type="number"
                  fullWidth
                  name="PersonalInformation.OTP"
                  component={TextField}
                  disabled={false}
                  label="OTP"
                  //variant="standard"
                ></Field>
                <Button variant="contained" sx={{ m: 2 }}>
                  Verify otp
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  fullWidth
                  name="PersonalInformation.EmailAddress"
                  component={TextField}
                  disabled={false}
                  label="EmailAddress"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <Field
                  type="text"
                  fullWidth
                  name="PersonalInformation.PhysicalAddress"
                  component={TextField}
                  disabled={false}
                  label="PhysicalAddress"
                  // //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12}>
                <h3>How do you know about us</h3>
                <Field
                  component={Select}
                  name="Aboutus"
                  labelId="age-simple"
                  // label="About us"
                  // //variant="standard"
                  disabled={false}
                >
                  {aboutus.map((about) => (
                    <MenuItem value={about}>{about}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <h3>Write any comments</h3>
                <Field
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  name="comments"
                  placeholder="write here"
                  component={TextField}
                  disabled={false}
                  // label="comments"
                  // //variant="standard"
                ></Field>
              </Grid>
              <Grid item textAlign={"center"} sx={{ width: "100%" }}>
                <Button variant="contained" type="submit">
                  submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};
