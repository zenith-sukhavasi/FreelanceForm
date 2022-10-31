import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { TextField, RadioGroup } from "formik-mui";
import * as yup from "yup";

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  FormControlLabel,
  Grid,
  Radio,
  Stack,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "formik-mui";
import FormControl from "@mui/material/FormControl";
import { SubmitListener } from "../Formutils/Submithlistener";
import { FormContext } from "../Data/FormContext";

export const Step2x = ({ data, handleSubmit }) => {
  // const {  submitForm } = useFormikContext();
  const { form, setForm, handleSubmit2 } = useContext(FormContext);
  console.log("form", form);
  const formRef = useRef();
  const handleChange2 = async (e, setFieldValue, submitForm) => {
    await setFieldValue("value", e.target.value, false); // last argument prevents validation from running
    submitForm();
  };

  useEffect(() => {
    handleSubmit2(formRef);
  }, [formRef.current?.values]);
  const HandleChange = (isValid, dirty) => {
    console.log(isValid, dirty);
    console.log(formRef.current.values);
    if (isValid && dirty) {
      console.log(formRef.current.values);
      handleSubmit(formRef.current.values);
    }
  };
  const HandleClick2 = async (picked) => {
    await setForm({ ...form, picked: picked });
    console.log(picked);
  };
  const HandleClick = () => {
    console.log(formRef.current.values);
    handleSubmit(formRef.current.values);
  };
  return (
    <div>
      <Formik
        innerRef={formRef}
        initialValues={{ picked: form.picked, Degreecourse: form.Degreecourse }}
        enableReinitialize={true}
        validationSchema={yup.object({
          picked: yup.string().required("select  one"),
          Degreecourse: yup.string().required("select the desired Course"),
        })}
        onSubmit={(e) => {
          handleSubmit(e, 2);
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
            <Stack spacing={2} m={"auto"}>
              <h3>Select your level to pursue</h3>
              <Grid
                container
                spacing={2}
                justifyContent="space-between"
                direction="row"
              >
                <Grid item xs={6} md={3}>
                  <Card
                    sx={{ width: "100px", margin: "auto" }}
                    onClick={() => HandleClick2("Masters")}
                  >
                    <CardActionArea sx={{ height: "100%" }}>
                      <h4>Masters</h4>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Card
                    sx={{ width: "100px", margin: "auto" }}
                    onClick={() => HandleClick2("Bachelors")}
                  >
                    <CardActionArea sx={{ height: "100%" }}>
                      <h4>Bachelors</h4>
                    </CardActionArea>
                  </Card>
                </Grid>
                {form.country == "Canada" && (
                  <>
                    <Grid item xs={6} md={3}>
                      <Card
                        sx={{ width: "100px", margin: "auto" }}
                        onClick={() => HandleClick2("Diploma")}
                      >
                        <CardActionArea sx={{ height: "100%" }}>
                          <h4>Diploma</h4>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card
                        sx={{ width: "100px", margin: "auto" }}
                        onClick={() => HandleClick2("PG Diploma")}
                      >
                        <CardActionArea sx={{ height: "100%" }}>
                          <h4>PG Diploma</h4>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </>
                )}
              </Grid>
              {/* <Box>
                <label>
                  <Field type="radio" name="picked" value="One" />
                  One
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  Two
                </label>
                <ErrorMessage
                  className="Error"
                  component="p"
                  name="picked"
                ></ErrorMessage>
              </Box> */}
              {values.picked && (
                <>
                  <h4>Choose desired {form.picked} course</h4>
                  <Field
                    component={Select}
                    disabled={false}
                    //formControl={{ FormControl }}
                    formHelperText={{
                      children: "Please select your desired Course",
                    }}
                    id="age"
                    name="Degreecourse"
                    labelId="age-simple"
                    label="Course"
                    //   variant="standard"
                    onChange={(e) => {
                      handleChange2(e, setFieldValue, submitForm);
                    }}
                    // onChange={e => {
                    //    // e.persist();
                    //     setFieldValue('value', e.target.value, false); // last argument prevents validation from running
                    //     submitForm();
                    //   }}
                    //onChange={() => HandleChange(isValid,dirty)}
                  >
                    {/* <MenuItem value="">Select</MenuItem> */}
                    <MenuItem value="COMPUTER SCIENCE">
                      COMPUTER SCIENCE
                    </MenuItem>
                    <MenuItem value="DATA SCIENCE">DATA SCIENCE</MenuItem>
                    <MenuItem value="CYBER SECURITY">CYBER SECURITY</MenuItem>
                    <MenuItem value="SOFTWARE ENGINEERING">
                      SOFTWARE ENGINEERING
                    </MenuItem>
                    <MenuItem value="ARTIFICIAL INTEELIGENCE">
                      ARTIFICIAL INTEELIGENCE
                    </MenuItem>
                    <MenuItem value="INFORMATION SYSTEMS">
                      INFORMATION SYSTEMS
                    </MenuItem>
                    <MenuItem value="COMPUTER ENGINEERING">
                      COMPUTER ENGINEERING
                    </MenuItem>
                    <MenuItem value="ELECTRICAL ENGINEERING">
                      ELECTRICAL ENGINEERING
                    </MenuItem>
                    <MenuItem value="MECHANICAL ENGINEERING">
                      MECHANICAL ENGINEERING
                    </MenuItem>
                    <MenuItem value="INDUSTRIAL ENGINEERING">
                      INDUSTRIAL ENGINEERING
                    </MenuItem>
                    <MenuItem value="ENGINEERING MANAGEMENT">
                      ENGINEERING MANAGEMENT
                    </MenuItem>
                    <MenuItem value="CIVIL ENGINEERING">
                      CIVIL ENGINEERING
                    </MenuItem>
                    <MenuItem value="CONSTRUCTION MANAGEMENT">
                      CONSTRUCTION MANAGEMENT
                    </MenuItem>
                    <MenuItem value="BIOMEDICAL ENGINEERING">
                      BIOMEDICAL ENGINEERING
                    </MenuItem>
                    <MenuItem value="HEALTH INFORMATICS/ PUBLIC HEALTH">
                      HEALTH INFORMATICS/ PUBLIC HEALTH
                    </MenuItem>
                    <MenuItem value="AGRICULTURE">AGRICULTURE</MenuItem>
                    <MenuItem value="BUSINESS ANALYTICS">
                      BUSINESS ANALYTICS
                    </MenuItem>
                    <MenuItem value="BUSINESS ADMINISTRATION">
                      BUSINESS ADMINISTRATION
                    </MenuItem>
                    <MenuItem value="ENVINORMENTAL ENGINEERING">
                      ENVINORMENTAL ENGINEERING
                    </MenuItem>
                    <MenuItem value="MANAGEMENT INFORMATION SYSTEMS">
                      MANAGEMENT INFORMATION SYSTEMS{" "}
                    </MenuItem>
                    <MenuItem value="PHARMACEUTICS">PHARMACEUTICS</MenuItem>
                    <MenuItem value="REGULATORY AFFAIRS">
                      REGULATORY AFFAIRS
                    </MenuItem>
                    {/* <MenuItem value="">OTHERS</MenuItem> */}
                  </Field>
                </>
              )}

              {/* <Button variant="contained" type="submit">
                            nextStep
                        </Button> */}
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};
