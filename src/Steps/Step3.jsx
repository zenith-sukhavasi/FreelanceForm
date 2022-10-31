
import { ErrorMessage, Field, Form, Formik,useFormikContext } from "formik";
import { TextField, RadioGroup, Select } from "formik-mui";
import * as yup from "yup";
import { Grid, MenuItem } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import { months, years } from "../Data/Data";
import { FormContext } from "../Data/FormContext";

export const Step3 = ({ data, handleSubmit }) => {
    const {form,setForm,handleSubmit2}=useContext(FormContext)
  console.log("form",form)
  const formRef = useRef();
  const  handleChange2 = async(e,setFieldValue,submitForm) => {
    console.log("handleChange2",formRef.current)
       await setFieldValue('value', e.target.value, false); // last argument prevents validation from running
       submitForm();
  }
  
  useEffect(() => {
    console.log("useEfferct",formRef.current)
    handleSubmit2(formRef);
  },[formRef.current?.values] )
  return (
    <div className="form3">
            <Formik
                innerRef={formRef}
                initialValues={{year:form.year,month:form.month}}
                enableReinitialize={true}
                validationSchema={yup.object({
                    year: yup.string().required("select  one"),
                    month:yup.string().required("select the desired Course")
                })}
                onSubmit={(e)=>{handleSubmit(e,3)}}
            >
                {({ isSubmitting, isValid,dirty,values,submitForm,setFieldValue }) => (
                    <Form>
                        <h3>Which Intake you are applying for?</h3>
                        <Grid container spacing={{ xs: 2, md: 4 }}>
                        <Grid item xs={12} sm={6}>
                       <Field
                            component={Select}
                            //formControl={{ FormControl }}
                            //formHelperText={{ children: "Please select your desired Course" }}
                            name="month"
                            label="month"
                            fullWidth
                            // variant="standard"
                            disabled={false}
                            onChange={e => {
                                handleChange2(e,setFieldValue,submitForm)
                               }}
                        >
                           {months.map(month =>(
                            <MenuItem value={month}>{month}</MenuItem>
                           ))}
                        </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Field
                            component={Select}
                            //formHelperText={{ children: "Please select your desired Course" }}
                            name="year"
                            label="year"
                            fullWidth
                           style={{minWidth:'100px'}}
                            // variant="standard"
                            disabled={false}
                            onChange={e => {
                                handleChange2(e,setFieldValue,submitForm)
                               }}
                        >{years.map(year =>(
                          <MenuItem value={year}>{year}</MenuItem>
                         ))}
                        </Field>
                        </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
  )
}
