import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./contacts.module.css";

const ProfileDataForm = ({  profile ,onSubmit}) => {

    return (<div>
        <Formik
            initialValues={{
                fullName: profile.fullName,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
                contacts: profile.contacts
            }}
            validate={values => {
                const errors = {}
                if (!values.contacts) {
                    errors.contacts = 'Required'
                }if (!values.fullName) {
                    errors.fullName = 'Required'
                }
                return errors
            }}
            onSubmit={(initialValues) => {
                onSubmit(initialValues)
                    // .then((response) => {
                    //    if (response.data.messages.length >= 0) {
                      //      debugger
                          //  FormikHelpers.setFieldError('contacts', 'Invalid contact url')
                        //}
                    // })
            }}
        >
            <Form>
                <button type='submit'>Save</button>
                <div>
                    <b>Full name : </b><Field name="fullName"/>
                    <ErrorMessage name='fullName' component='div'/>
                </div>
                <div><b>Looking for a job : </b> <Field type="checkbox" name="lookingForAJob"/></div>
                <div>Contacts : {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contacts} key={key}>
                        <div><b>{key}</b>: <div><Field name={'contacts.' + key}/></div></div>
                        <ErrorMessage name='contacts' component='div'/>
                    </div>
                })}
                    <ErrorMessage name='contacts' component='div'/>
                </div>
                <ErrorMessage name='contacts' component='div'/>
                <div>
                    <b>My professional skills : </b><Field name="lookingForAJobDescription"/>
                </div>
                <div>
                    <b>About me : </b><Field name='aboutMe'/>
                </div>
            </Form>
        </Formik>
    </div>)
}


export default ProfileDataForm;