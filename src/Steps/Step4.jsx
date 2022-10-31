import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { TextField, RadioGroup, Select } from "formik-mui";
import * as yup from "yup";
import {
  Button,
  Card,
  CardActionArea,
  Grid,
  MenuItem,
  Stack,
} from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { englishTests, months, years } from "../Data/Data";
import { FormContext } from "../Data/FormContext";
import { Gre } from "./Gre";

export const Step4 = ({ data, handleSubmit }) => {
  const { form, setForm } = useContext(FormContext);
  console.log("form", form);
  const formRef = useRef();
  const handleChange2 = async (e, setFieldValue, submitForm) => {
    await setFieldValue("value", e.target.value, false); // last argument prevents validation from running
    //submitForm();
  };

  // useEffect(() => {
  //   return async () => {
  //     const { dirty, isSubmitting, isValid, values } = formRef.current;
  //     console.log("formref", formRef.current);
  //     console.log(dirty, isSubmitting, isValid, values);
  //     if (!isSubmitting && dirty && isValid) {
  //       try {
  //         await formRef.current.submitForm();
  //         console.log("values", values);
  //       } catch (error) {
  //         // Handle error
  //         console.error(error);
  //       }
  //     }
  //   };
  // }, [formRef.current?.values]);

  const HandleClick2 = async (TakenGRE) => {
    await setForm({ ...form, TakenGRE: TakenGRE });
    console.log(TakenGRE);
  };
  return (
    <div className="form4">
      <Formik
        innerRef={formRef}
        initialValues={form}
        enableReinitialize={true}
        validationSchema={yup.object({
          TakenEnglishTest: yup.string().required("please select a Test"),
          IELTSTentativeDate: yup.date().when("TakenEnglishTest", {
            is: "Not Taken",
            then: yup.date().required("select date"),
          }),
          IELTScourse: yup.object().when("TakenEnglishTest", {
            is: "IELTS",
            then: yup.object({
              dateTaken: yup.date().required("select date"),
              Reading: yup.number().required("Enter the SCORE"),
              Writing: yup.number().required("Enter the SCORE"),
              Listening: yup.number().required("Enter the SCORE"),
              Speaking: yup.number().required("Enter the SCORE"),
            }),
          }),
        })}
        onSubmit={(e) => {
          handleSubmit(e, 4);
        }}
      >
        {({
          isSubmitting,
          errors,
          isValid,
          dirty,
          values,
          submitForm,
          setFieldValue,
        }) => (
          <Form>
            {/* <DatePicker showDefaultIcon onChange={handleChange2}/> */}
            {/* <Stack spacing={2} m={"auto"}> */}
            <div className="Stacky">
              <h3>Your Test Scores?</h3>
              {values.country=="USA"&&(
                <Gre handleSubmit={handleSubmit} data={data} ></Gre>
              )}
              {/* <h4>DID YOU TAKE TEST ?</h4>
              <Grid
                container
                justifyContent="space-between"
                spacing={2}
                direction="row"
              >
                <Card
                  sx={{ minWidth: "100px" }}
                  onClick={() => HandleClick2("YES")}
                >
                  <CardActionArea sx={{ height: "100%" }}>
                    <h4>YES</h4>
                  </CardActionArea>
                </Card>
                <Card
                  sx={{ minWidth: "100px" }}
                  onClick={() => HandleClick2("NO")}
                >
                  <CardActionArea sx={{ height: "100%" }}>
                    <h4>NO</h4>
                  </CardActionArea>
                </Card>
              </Grid>
              {values.TakenGRE == "NO" && (
                <>
                  <Field
                    type="date"
                    name="GRETentativeDate"
                    component={TextField}
                    disabled={false}
                    //label="CollegeName"
                    // variant="standard"
                  ></Field>
                  <label htmlFor="GRETentativeDate">GRE tentative date</label>
                </>
              )}
              {values.TakenGRE == "YES" && (
                <>
                  <Grid container spacing={{ xs: 2, md: 4 }}>
                    <Grid item xs={12}>
                      <Stack spacing={2}>
                        <Field
                          type="date"
                          name="GRE.dateTaken"
                          component={TextField}
                          disabled={false}
                          //label="GRE date"
                          // variant="standard"
                        ></Field>
                        <label htmlFor="GRE.dateTaken">GRE date</label>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="number"
                        name="GRE.quant"
                        fullWidth
                        component={TextField}
                        disabled={false}
                        label="quant"
                        // variant="standard"
                      ></Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="number"
                        name="GRE.verbal"
                        fullWidth
                        component={TextField}
                        disabled={false}
                        label="verbal"
                        // variant="standard"
                      ></Field>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        type="number"
                        name="GRE.AWA"
                        fullWidth
                        component={TextField}
                        disabled={false}
                        label="AWA"
                        // variant="standard"
                      ></Field>
                    </Grid>
                  </Grid>
                </>
              )} */}
              <div>
              <h3>IELTS / PTE / TOFEL / DULINGO</h3>
              </div>
              <div>
                <Field
                  component={Select}
                  formHelperText={{
                    children: "Please select your English Test",
                  }}
                  name="TakenEnglishTest"
                  label="TakenEnglishTest"
                  // variant="standard"
                  onChange={(e) =>handleChange2(e,setFieldValue)}
                  disabled={false}
                >
                  {englishTests.map((test) => (
                    <MenuItem value={test}>{test}</MenuItem>
                  ))}
                </Field>
              </div>
              {values.TakenEnglishTest == "Not Taken" && (
                <Stack spacing={2}>
                  <label>
                   tentative date
                  </label>
                    <Field
                      type="date"
                      name="IELTSTentativeDate"
                      component={TextField}
                      disabled={false}
                      //label="CollegeName"
                      // variant="standard"
                    ></Field>

                </Stack>
              )}
              {(  values.TakenEnglishTest && values.TakenEnglishTest != "Not Taken") && (
                <Grid container  spacing={{ xs: 2, md: 4 }}>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                    <label htmlFor="IELTScourse.dateTaken">{values.TakenEnglishTest} date</label>
                      <Field
                        type="date"
                        name="IELTScourse.dateTaken"
                        component={TextField}
                        disabled={false}
                        //label="CollegeName"
                        // variant="standard"
                      ></Field>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                    fullWidth
                      type="number"
                      name="IELTScourse.Reading"
                      component={TextField}
                      disabled={false}
                      label="Reading"
                      // variant="standard"
                    ></Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      type="number"
                      fullWidth
                      name="IELTScourse.Writing"
                      component={TextField}
                      disabled={false}
                      label="Writing"
                      // variant="standard"
                    ></Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      type="number"
                      fullWidth
                      name="IELTScourse.Listening"
                      component={TextField}
                      disabled={false}
                      label="Listening"
                      // variant="standard"
                    ></Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      type="number"
                      fullWidth
                      name="IELTScourse.Speaking"
                      component={TextField}
                      disabled={false}
                      label="Speaking"
                      // variant="standard"
                    ></Field>
                  </Grid>
                </Grid>
              )}
              <Button variant="contained" sx={{ m: 2 }} type="submit">
                nextStep
              </Button>
              </div>
            {/* </Stack> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
