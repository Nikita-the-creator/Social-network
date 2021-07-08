import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, Form, Formik } from "formik";

const Dialogs = ({ dialogsPage,addMessage }) => {

    let dialogsElements = dialogsPage.dialogsData.map((dialog) => {
        return <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    let messageElements = dialogsPage.messagesData.map((message) => {
        return <Message key={message.id} message={message.message} id={message.id}/>
    })

    let onMessageAdd = (newMessageBody) => {
        addMessage(newMessageBody)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    newMessageBody: ''
                }}
                onSubmit={(initialValues) => {
                    onMessageAdd(initialValues.newMessageBody)
                }}>
                {(props) => {
                    return (
                        <Form className={s.dialogs}>
                            <div className={s.dialogsItems}>
                                {dialogsElements}
                            </div>
                            <div className={s.messages}>
                                {messageElements}
                            </div>
                            <div className={s.messages}>
                                {messageElements}
                            </div>
                            <div className={s.addMessage}>
                                <Field name="newMessageBody" cols="20" rows="5"/>
                                <button type='submit' className={s.button}>add message</button>
                            </div>
                        </Form>
                    )
                }
                }
            </Formik>
        </div>
    )
}

export default Dialogs;