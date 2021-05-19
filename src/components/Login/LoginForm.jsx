import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { authAPI } from "../api";

const LoginForm = ({ authMeThunkCreator }) => {

    return (<div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    // } else if (values.password.length < 8) {
                    //     errors.password = 'Password must be at least 8 characters!';
                    // }
                    return errors;
                }}
                onSubmit={(initialValues, FormikHelpers) => {
                    authAPI.login(initialValues.email, initialValues.password, initialValues.rememberMe)
                        .then((response) => {
                                if (response.data.resultCode === 0) {
                                    authMeThunkCreator()
                                } else if (response.data.messages.length >= 0) {
                                    FormikHelpers.setFieldError('email', 'Invalid email')
                                    FormikHelpers.setFieldError('password', 'Invalid password')
                                }
                            }
                        )


                }}

            >
                {(props) => {
                    return (
                        <Form>
                            <h3>Email</h3>
                            <Field autoComplete="username" type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                            <h3>Password</h3>
                            <Field autoComplete="current-password" type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                            <div>
                                <Field type="checkbox" name="rememberMe"/>
                                remember me
                            </div>
                            <div>
                                <button type="submit" disabled={false}>Sign up</button>
                            </div>
                        </Form>)
                }
                }
            </Formik>
        </div>
    )
}

export default LoginForm;