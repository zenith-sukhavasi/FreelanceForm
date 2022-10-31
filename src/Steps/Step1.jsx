import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { FormContext } from "../Data/FormContext";

export const Step1 = ({ setCountry, handleFirst }) => {
  const { form, setForm, handleSubmit2 } = useContext(FormContext);

  const HandleClick = async (country) => {
    handleFirst(country);
  };

  return (
    <div className="step-box">
        <h2>Which country you are applying for?</h2>
        <Grid container mx={2} spacing={{ xs: 2, md: 4 }} columns={{ xs: 30}}>
          <Grid item xs={6} sm={4}>
          <div
            className="col-md-4"
            value="USA"
            onClick={() => HandleClick("USA")}
          >
            <label className="step-box-content bg-white text-center relative-position ">
              <span className="step-box-icon">
                <img
                  src="https://i20.crazytechsol.in/assets/img/usa.png"
                  alt=""
                />
              </span>
              <span className="step-box-text">USA</span>
              <span className="service-check-option">
                <span>
                  <input type="radio" name="country" id="country" value="USA" />
                </span>
              </span>
            </label>
          </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="col-md-4" onClick={() => HandleClick("UK")}>
              <label className="step-box-content bg-white text-center relative-position ">
                <span className="step-box-icon">
                  <img
                    src="https://i20.crazytechsol.in/assets/img/uk.png"
                    alt=""
                  />
                </span>
                <span className="step-box-text">UK</span>
                <span className="service-check-option">
                  <span>
                    <input
                      type="radio"
                      name="country"
                      id="country"
                      value="UK"
                    />
                  </span>
                </span>
              </label>
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="col-md-4" onClick={() => HandleClick("Canada")}>
              <label
                className="step-box-content bg-white text-center relative-position "
                id="canada"
              >
                <span className="step-box-icon">
                  <img
                    src="https://i20.crazytechsol.in/assets/img/canada.png"
                    alt=""
                  />
                </span>
                <span className="step-box-text">Canada</span>
                <span className="service-check-option">
                  <span>
                    <input
                      type="radio"
                      name="country"
                      id="country"
                      value="Canada"
                    />
                  </span>
                </span>
              </label>
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="col-md-4" onClick={() => HandleClick("Australia")}>
              <label className="step-box-content bg-white text-center relative-position ">
                <span className="step-box-icon">
                  <img
                    src="https://i20.crazytechsol.in/assets/img/australia.png"
                    alt=""
                  />
                </span>
                <span className="step-box-text">Australia</span>
                <span className="service-check-option">
                  <span>
                    <input
                      type="radio"
                      name="country"
                      id="country"
                      value="Australia"
                    />
                  </span>
                </span>
              </label>
            </div>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="col-md-4" onClick={() => HandleClick("Ireland")}>
              <label className="step-box-content bg-white text-center relative-position ">
                <span className="step-box-icon">
                  <img
                    src="https://i20.crazytechsol.in/assets/img/ireland.png"
                    alt=""
                  />
                </span>
                <span className="step-box-text">Ireland</span>
                <span className="service-check-option">
                  <span>
                    <input
                      type="radio"
                      name="country"
                      id="country"
                      value="Ireland"
                    />
                  </span>
                </span>
              </label>
            </div>
          </Grid>
        </Grid>
    </div>
  );
};
