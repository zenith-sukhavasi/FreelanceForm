import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { TextField, Select } from "formik-mui";
import * as yup from "yup";
import { Button, Grid, MenuItem, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import {
  Degrees,
  FamilyIncome,
  months,
  TutionFee,
  years,
  years2,
} from "../Data/Data";
import { FormContext } from "../Data/FormContext";

export const Step6 = ({ data, handleSubmit }) => {
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
  return (
    <div className="form6">
      <Formik
        innerRef={formRef}
        initialValues={form}
        enableReinitialize={true}
        validationSchema={yup.object({
          Degree: yup.string().required("Select the Degree"),
          AcademicDetails: yup.object({
            CollegeName: yup.string().required("Enter the College Name"),
            YearofPassing: yup.string().required("Enter the College Name"),
            Percentage: yup
              .number()
              .required("Enter the percentage")
              .max(100, "percentage must be below 100")
              .min(0, "percentage must be above 0"),
            BackLogs: yup
              .number()
              .required("Enter the BackLogs")
              .max(100, "BackLogs must be below 100")
              .min(0, "BackLogs must be above 0"),
          }),
          WorkExperience: yup.array(
            yup.object({
              CompanyName: yup.string().required("Enter the Company Name"),
              Designation: yup.string().required("Enter your Designation"),
              TotalExperience: yup
                .string()
                .required("Enter your TotalExperience"),
            })
          ),
        })}
        onSubmit={(e) => {
          console.log("submitted", e);
          handleSubmit(e, 6);
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
            <Grid container spacing={{ xs: 2, md: 4 }} >
            <Grid item xs={12}> <h3>Your Academic Details?</h3></Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="text"
                  fullWidth
                  name="AcademicDetails.CollegeName"
                  component={TextField}
                  disabled={false}
                  label="CollegeName"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                   fullWidth
                  component={Select}
                  formHelperText={{
                    children: "Please select your desired Course",
                  }}
                  name="AcademicDetails.YearofPassing"
                  label="YearofPassing"
                  //variant="standard"
                  disabled={false}
                >
                  {years2.map((year) => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                fullWidth
                  type="number"
                  name="AcademicDetails.Percentage"
                  component={TextField}
                  disabled={false}
                  label="Percentage"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  type="number"
                  fullWidth
                  name="AcademicDetails.BackLogs"
                  component={TextField}
                  disabled={false}
                  label="BackLogs"
                  //variant="standard"
                ></Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                fullWidth
                sx={{minWidth:'100%'}}
                style={{minWidth:'100%'}}
                  component={Select}
                  formHelperText={{
                    children: "Please select your desired Course",
                  }}
                  name="Degree"
                  label="Degree"
                  //variant="standard"
                  disabled={false}
                >
                  {Degrees.map((degree) => (
                    <MenuItem value={degree}>{degree}</MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>
            <Stack spacing={2} m={"auto"}>
              <Grid item textAlign={"center"} sx={{ width: "100%" }}>
                <h3>Work Experience (Optional)</h3>
              </Grid>
              <FieldArray name="WorkExperience">
                {({ push, remove }) => (
                  <React.Fragment>
                    {values.WorkExperience.map((_, index) => (
                      <Grid
                        item
                        container
                        key={index}
                        width="100%"
                        spacing={2}
                        xs={12}
                        sm="auto"
                      >
                        <Grid item xs={12} sm={6}>
                          <Field
                            fullWidth
                            disabled={false}
                            name={`WorkExperience.${index}.CompanyName`}
                            component={TextField}
                            label="CompanyName"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            fullWidth
                            disabled={false}
                            name={`WorkExperience[${index}].Designation`}
                            component={TextField}
                            type="text"
                            label="Designation"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            fullWidth
                            disabled={false}
                            name={`WorkExperience[${index}].TotalExperience`}
                            component={TextField}
                            type="number"
                            label="TotalExperience in years"
                          />
                        </Grid>
                        <Grid item xs={12} sm="auto">
                          <Button onClick={() => remove(index)}>
                            {index ? "Delete" : "skip"}
                          </Button>
                        </Grid>
                      </Grid>
                    ))}

                    {/* <Grid item>
                    {typeof errors.donations === "string" ? (
                      <Typography color="error">{errors.donations}</Typography>
                    ) : null}
                  </Grid> */}

                    <Grid item>
                      <Button
                        //disabled={isSubmitting}
                        variant="contained"
                        onClick={() =>
                          push({
                            CompanyName: "",
                            Designation: "",
                            TotalExperience: "",
                          })
                        }
                      >
                        Add More Experience 
                      </Button>
                    </Grid>
                  </React.Fragment>
                )}
              </FieldArray>
              <Grid item>
                <Button variant="contained" sx={{ m: 2 }} type="submit">
                  NEXTStep
                </Button>
              </Grid>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};
