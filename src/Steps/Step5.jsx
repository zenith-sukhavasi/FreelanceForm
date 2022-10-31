import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { TextField, RadioGroup, Select } from "formik-mui";
import * as yup from "yup";
import { Card, CardActionArea, Grid, MenuItem } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { FamilyIncome, months, TutionFee, years } from "../Data/Data";
import { FormContext } from "../Data/FormContext";

export const Step5 = ({ data, handleSubmit }) => {
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
  const HandleClick2 = async (EducationLoanEligibility) => {
    await setForm({
      ...form,
      EducationLoanEligibility: EducationLoanEligibility,
    });
    console.log(EducationLoanEligibility);
  };
  return (
    <div className="form5">
      <Formik
        innerRef={formRef}
        initialValues={form}
        enableReinitialize={true}
        validationSchema={yup.object({
          TutionFee: yup.string().required("Select the TutionFee"),
          FamilyIncome: yup.string().required("select your Family income"),
          EducationLoanEligibility: yup
            .string()
            .required("select your Loan eligibily"),
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
            <h3> Education Loan Eligibility</h3>
            <Grid
              my={2}
              container
              //sx={{maxWidth:'sm',mx:'auto'}}
              //maxWidth={sm}
              justifyContent="space-between"
              spacing={2}
              direction="row"
            >
              <Card
                sx={{ width: "100px", margin: "auto" }}
                onClick={() => HandleClick2("YES")}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <h4>YES</h4>
                </CardActionArea>
              </Card>
              <Card
                sx={{ width: "100px", margin: "auto" }}
                onClick={() => HandleClick2("NO")}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <h4>NO</h4>
                </CardActionArea>
              </Card>
            </Grid>
          {form.EducationLoanEligibility&&(  <Grid container spacing={{ xs: 2, md: 4 }} mb={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  component={Select}
                  //formHelperText={{ children: "Please select your desired Course" }}
                  name="TutionFee"
                  label="TutionFee"
                  //variant="standard"
                  disabled={false}
                  onChange={(e) => {
                    handleChange2(e, setFieldValue, submitForm);
                  }}
                >
                  {TutionFee.map((fee) => (
                    <MenuItem value={fee}>{fee}</MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  component={Select}
                  //formControl={{ FormControl }}
                  // formHelperText={{ children: "Please select your desired Course" }}
                  name="FamilyIncome"
                  label="FamilyIncome"
                  //variant="standard"
                  disabled={false}
                  onChange={(e) => {
                    handleChange2(e, setFieldValue, submitForm);
                  }}
                >
                  {FamilyIncome.map((income) => (
                    <MenuItem value={income}>{income}</MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>)}
            {/* <div>
                        <label>
                            <Field type="radio" name="EducationLoanEligibility" value="yes"
                             onClick={e => {
                                handleChange2(e,setFieldValue,submitForm)
                               }} />
                            YES
                        </label>
                        <label>
                            <Field type="radio" name="EducationLoanEligibility" value="no"
                            onClick={e => {
                                handleChange2(e,setFieldValue,submitForm)
                               }} />
                            NO
                        </label>
                        <ErrorMessage
                            className="Error"
                            component="p"
                            name="EducationLoanEligibility"
                        ></ErrorMessage>
                        </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
