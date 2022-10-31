

import { useState, createContext } from "react";

export const FormContext = createContext()

export const FormProvider = (props) => {
  const data = {
    country: "",
    name: "",
    age: "",
    weight: "",
    picked: "",
    picked2: '',
    Degreecourse: "",
    year: "",
    month: "",
    TutionFee: "",
    FamilyIncome: "",
    EducationLoanEligibility: "",
    Degree: "",
    AcademicDetails: {
      CollegeName: "",
      YearofPassing: "",
      Percentage: "",
      BackLogs: "",
    },
    WorkExperience: [{
      CompanyName: "",
      Designation: "",
      TotalExperience: '',
    }],
    TakenGRE: "",
    GRE: {
      dateTaken: "",
      quant: "",
      verbal: "",
      AWA: "",
      Total: "",
    },
    GRETentativeDate: "",
    TakenEnglishTest: "",
    IELTScourse:{
      DateTaken: "",
      Reading: "",
      Writing: "",
      Listening: "",
      Speaking: "",
    },
    IELTSTentativeDate: "",
    PersonalInformation:{
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      OTP: "",
      EmailAddress: "",
      PhysicalAddress: "",
    },
    Aboutus: "Facebook",
    comments: "",

  }
  const [form, setForm] = useState(data);
  const handleSubmit2 = async (formRef) => {
    const { dirty, isSubmitting, isValid, values } = formRef.current;
    console.log("formref", formRef.current)
    console.log(dirty, isSubmitting, isValid, values)
    if (!isSubmitting && dirty && isValid) {
      try {
        await formRef.current.submitForm();
        console.log("values", values)
      } catch (error) {
        // Handle error
        console.error(error)
      }
    }
  };

  return (
    <FormContext.Provider value={{ form, setForm, data, handleSubmit2 }}>
      {props.children}
    </FormContext.Provider>
  );
}