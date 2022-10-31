import React, { useEffect, useRef, useState } from "react";

export const SubmitListener = (
    props
) => {
    console.log(props.formik.values)
    const [lastValues, updateState] = React.useState(props.formik.values);

    React.useEffect(() => {
        const valuesEqualLastValues =  props.formik.values;
        console.log(props.formik.values)
        const valuesEqualInitialValues =
            props.formik.values === props.formik.initialValues;

        if (!valuesEqualLastValues) {
            updateState(props.formik.values);
        }

        if (!valuesEqualLastValues && !valuesEqualInitialValues) {
            props.formik.submitForm();
        }
    }, [
        lastValues,
        props.formik.values,
        props.formik.initialValues,
        props.onChange,
        props.formik,
    ]);

    return null;
};