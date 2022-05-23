import { useFormik } from "formik";
import React from "react";
import { 
    BoxContainer,
    FormContainer,
    SubmitButton 
    } from "./common";
import { Marginer } from "../marginer";
import axios from "axios";


export function Profile(props){

    const onSubmit = async (values) => {

        const response = await axios
        .post("https://localhost:8080/profile", values)
    };
    
    const formik = useFormik({ initialValues: { user: "", pass:""},
    validateOnBlur: true,
    onSubmit,
});

    return (
        <BoxContainer>
            <FormContainer onSubmit={formik.handleSubmit}>
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" id="home" disabled={formik.isValid}>Home</SubmitButton>
                <SubmitButton type="submit" id="upload" disabled={formik.isValid}>Upload</SubmitButton>
                </FormContainer>
        </BoxContainer>
    )
}