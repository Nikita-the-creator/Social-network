import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { ErrorMessage, Field, Form, Formik } from "formik";

const MyPosts = (props) => {

    let postsElements = props.profilePage.postData.map((post) => {
        return <Post key={post.id} message={post.message} likeCount={post.likeCount}/>;
    })

    let addPost = (newPost) => {
        props.addPost(newPost);
    }

    return (
        <div className={s.postsBlock}>
            <Formik
                initialValues={{
                    newPost: ''
                }}
                validate={(initialValues) => {
                    const errors = {}
                    if (!initialValues.newPost) {
                        errors.newPost = 'Field is required';
                    }
                    return errors;
                }}
                onSubmit={(initialValues) => {
                    addPost(initialValues.newPost);
                }
                }
            >
                {(props) => {
                    return (
                        <Form>
                            <h3>My posts</h3>
                            <div>
                                <Field name="newPost"/>
                                <ErrorMessage name="newPost" component='div'/>
                            </div>
                            <div>
                                <button type='submit'>Add post</button>
                            </div>
                            <div className={s.posts}>
                                {postsElements}
                            </div>
                        </Form>
                    )
                }
                }
            </Formik>
        </div>
    )
}

export default MyPosts;