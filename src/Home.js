

import { Card, CardContent, Container, Stack } from '@mui/material';
import React, { useContext, useRef, useState } from 'react'
import { FormContext } from './Data/FormContext';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step2F } from './Steps/Step2F';
import { Step2x } from './Steps/Step2x';
import { Step3 } from './Steps/Step3';
import { Step4 } from './Steps/Step4';
import { Step5 } from './Steps/Step5';
import { Step6 } from './Steps/Step6';
import { Step7 } from './Steps/Step7';
import { Teststep } from './Steps/teststep';

export const Home = () => {
  const { form, setForm, data } = useContext(FormContext)
  const [country, setCountry] = useState('')
  const trackButton = useRef();
  const trackButton1 = useRef();
  const [steps, setSteps] = useState(1)

  const handleFirst = async (country) => {
    await setSteps(2)
    console.log(steps)
    setForm({...data,country: country})
    trackButton.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }
  const handleNext = async (step) => {
    console.log(steps, step)
    if (step >= steps) {
      await setSteps(step + 1)
      // console.log(steps,step)
      trackButton.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    }
  }
  const handleSubmit = (values, step) => {
    // setData((prev)=>({...prev, ...values}));
    setForm((prev) => ({ ...prev, ...values }));
    console.log(values)
    console.log(form)
    handleNext(step)
  };

  return (
    <Container  minWidth="xs" maxWidth="md" p={2}>
     
          {/* <button onClick={handleNext}>next</button> */}
          <Card sx={{marginBottom:'100px'}} >
            <CardContent>
          <Stack spacing={4}>
            <div ref={trackButton1}><Step1 handleFirst={handleFirst} setCountry={setCountry}></Step1></div>
            {steps >= 2 && (<div ref={trackButton}><Step2x handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step2x></div>)}
            {steps >= 3 && (<div ref={trackButton}><Step3 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step3></div>)}
            {/* {steps >= 4 &&(<div ref={trackButton}><Step6 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step6></div>)} */}
            {steps >= 4 && (<div ref={trackButton}><Step4 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step4></div>)}
            {steps >= 5 && (<div ref={trackButton}><Step5 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step5></div>)}
            {steps >= 6 && (<div ref={trackButton}><Step6 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step6></div>)}
            {steps >= 7 && (<div ref={trackButton}><Step7 handleSubmit={handleSubmit} data={data} handleNext={handleNext}></Step7></div>)}
            {steps >= 8 && (<div ref={trackButton}><Step3></Step3></div>)}
          </Stack>
          </CardContent>
          </Card>
    </Container>
  )
}
