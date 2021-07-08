import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { authAPI } from "../api";
import s from "./LoginForm.module.css"

const LoginForm = ({ authMeThunkCreator, captchaUrl , getCaptchaUrl }) => {

    return (<div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
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
                    authAPI.login(initialValues.email, initialValues.password, initialValues.rememberMe,
                        initialValues.captcha)
                        .then((response) => {
                                if (response.data.resultCode === 0) {
                                    authMeThunkCreator()
                                } else if (response.data.resultCode === 1) {
                                    FormikHelpers.setFieldError('email', 'Invalid email')
                                    FormikHelpers.setFieldError('password', 'Invalid password')
                                } else if (response.data.resultCode === 10) {
                                    getCaptchaUrl()
                                    FormikHelpers.setFieldError('captcha', 'Invalid anti-bot symbol')
                                }
                            }
                        )
                }}
            >
                {(props) => {
                    return (
                        <Form className={s.loginForm}>
                            <h3>Email</h3>
                            <Field autoComplete="username" type="email" name="email"/>
                            <ErrorMessage className={s.error} name="email" component="div"/>
                            <h3>Password</h3>
                            <Field autoComplete="current-password" type="password" name="password"/>
                            <ErrorMessage className={s.error} name="password" component="div"/>
                            <div>
                                <Field type="checkbox" name="rememberMe"/>
                                remember me
                            </div>

                            <div>{captchaUrl && <img  src={captchaUrl} />}</div>
                            <div>{captchaUrl && <Field name='captcha' />}</div>

                            <ErrorMessage className={s.error} name="captcha" component="div"/>
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