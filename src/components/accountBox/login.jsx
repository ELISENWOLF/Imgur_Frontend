import React, { useContext, useState }  from "react";
import { 
    BoldLink, 
    BoxContainer, 
    FieldError,
    FieldContainer, 
    FormContainer,
    FormSuccess,
    FormError, 
    Input, 
    MutedLink, 
    SubmitButton 
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
    user: yup.string().required("Username is required!"),
    pass: yup.string().required("Please enter password!")
})
export function Login(props){
    const { switchToSignup } = useContext(AccountContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        setError(null);

        const response = await axios
        .post("https://localhost:8080/login", values)
        .catch((err) => {
            if(err && err.response)
            setError(err.response.data.message);
        });
        if(response && response.data) {
            setSuccess(response.data.message);
            formik.resetForm();
        }
    };

    const formik = useFormik({ 
        initialValues: { name: "",password: "" }, 
        validateOnBlur: true, 
        onSubmit, 
        validationSchema: validationSchema });

    return (
        <BoxContainer>
            {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
            {!success && <FormError>{error ? error : ""}</FormError>}
             <FormContainer onSubmit={formik.handleSubmit}>
                <FieldContainer>
                    <Input name="user" type="name" id="username" placeholder="Username" value={formik.values.user} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    <FieldError>{formik.touched.user && formik.errors.user ? formik.errors.user: ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                <Input name="pass" type="password" id="password" placeholder="Password" value={formik.values.pass} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <FieldError>{formik.touched.pass && formik.errors.pass ? formik.errors.pass: ""}</FieldError>
                </FieldContainer>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit" id="submitbtn" disabled={!formik.isValid}>Signin</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Don't have an account?<BoldLink href="#" onClick={switchToSignup}> Signup</BoldLink></MutedLink>
            </FormContainer>
        </BoxContainer>
    )
};

