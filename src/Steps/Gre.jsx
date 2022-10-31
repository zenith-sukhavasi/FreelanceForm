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

export const Gre = ({ data, handleSubmit }) => {
  const { form, setForm } = useContext(FormContext);
  console.log("form", form);
  const formRef = useRef();
  const handleChange2 = async (e, setFieldValue, submitForm) => {
    await setFieldValue("value", e.target.value, false); // last argument prevents validation from running
    submitForm();
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
    <div className="GRE">
      <Formik
        innerRef={formRef}
        initialValues={form}
        enableReinitialize={true}
        validationSchema={yup.object({
          TakenGRE: yup.string().required("select "),
          GRETentativeDate: yup.date().when("TakenGRE", {
            is: "NO",
            then: yup.date().required("select date"),
          }),
          GRE: yup.object().when("TakenGRE", {
            is: "YES",
            then: yup.object({
              dateTaken: yup.date().required("select date"),
              quant: yup
                .number()
                .required("Enter the SCORE")
                .max(170, "Score must be below 170")
                .min(0, "Score must be above 0"),
              verbal: yup
                .number()
                .required("Enter the SCORE")
                .max(170, "Score must be below 170")
                .min(0, "Score must be above 0"),
              AWA: yup
                .number()
                .required("Enter the SCORE")
                .max(6, "Score must be below 6")
                .min(0, "Score must be above 0"),
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
              <h4>Have you taken GRE ?</h4>
              <Grid
                container
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
              {/* <div>
                <h4>DID YOU TAKE TEST ?</h4>
                <label>
                  <Field type="radio" name="TakenGRE" value="YES" />
                  YES
                </label>
                <label>
                  <Field type="radio" name="TakenGRE" value="NO" />
                  NO
                </label>
                <ErrorMessage
                  className="Error"
                  component="p"
                  name="TakenGRE"
                ></ErrorMessage>
              </div> */}
              {values.TakenGRE == "NO" && (
                <Stack spacing={2}>
                <label htmlFor="GRETentativeDate">GRE tentative date</label>
                  <Field
                    type="date"
                    name="GRETentativeDate"
                    component={TextField}
                    disabled={false}
                    //label="CollegeName"
                    // variant="standard"
                  ></Field>  
                </Stack>
              )}
              {values.TakenGRE == "YES" && (
                <>
                  <Grid container spacing={{ xs: 2, md: 4 }}>
                    <Grid item xs={12}>
                      <Stack spacing={2}>
                      <label htmlFor="GRE.dateTaken">GRE date</label>
                        <Field
                          type="date"
                          name="GRE.dateTaken"
                          component={TextField}
                          disabled={false}
                          //label="GRE date"
                          // variant="standard"
                        ></Field>
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
              )}
 
            {/* </Stack> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
