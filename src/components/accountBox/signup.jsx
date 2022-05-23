import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { 
    BoldLink,
    BoxContainer,
    FieldContainer,
    FieldError,
    FormContainer,
    FormSuccess,
    FormError,
    Input,
    MutedLink,
    SubmitButton 
    } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
    user: yup
        .string()
        .min(3, "Please enter your real name")
        .required("Username is required!"),
    pass: yup
        .string()
        .matches(PASSWORD_REGEX, "Password is not strong enough")
        .required("Password is required!")
});

export function Signup(props){
    const { switchToSignin } = useContext(AccountContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        setError(null);

        const response = await axios
        .post("https://localhost:8080/", values)
        .catch((err) => {
            if(err && err.response)
            setError(err.response.data.message);
        });
        if(response && response.data) {
            setSuccess(response.data.message);
            formik.resetForm();
        }
    };
    
    const formik = useFormik({ initialValues: { user: "", pass:""},
    validateOnBlur: true,


    onSubmit,
    validationSchema: validationSchema,
});

    return (
        <BoxContainer>
            {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
            {!success && <FormError>{error ? error : ""}</FormError>}
            <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                <Input type="name" name="user" id="username" placeholder="Username" value={formik.values.user} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FieldError>{formik.touched.user && formik.errors.user ? formik.errors.user: ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                <Input type="password" name="pass" id="password" placeholder="Password" value={formik.values.pass} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FieldError>{formik.touched.pass && formik.errors.pass ? formik.errors.pass: ""}</FieldError>
                </FieldContainer>
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" id="submitbtn" disabled={!formik.isValid}>Signup</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Already have an account?<BoldLink href="#" onClick={switchToSignin}> Signin</BoldLink></MutedLink>
                </FormContainer>
        </BoxContainer>
    )
}

