import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import { TextField } from '../../components/UI/TextField';
import * as Yup from 'yup';
import { TextAreaField } from '../UI/TextAreaField';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startAddNewPost } from '../../actions/posts';
import { useParams } from 'react-router-dom';

export const EditPost = () => {
    
    const params = useParams();
    const id = params.id ? +params.id : 0;
    const { posts } = useSelector(state => state.posts);
    const [post, setpost] = useState({});

    const dispatch = useDispatch();
    console.log(Object.keys(post).length);

    useEffect(() => {
        
        if(id > 0){
            setpost(posts.find(el => el.userId === id));
        }
    }, [id, posts, post])

    const validate = Yup.object({
        title: Yup.string().min(2, 'It must have 2 characters at least')
        .required('Title is Required'),
        message: Yup.string().min(5, 'It must to have 5 characters at least')
            .required('The Message is required!')
    });

    const handleSubmit = (values) => {
        const userId = 1;
        if(id === 0){
            dispatch(startAddNewPost(values, userId));
        }
    }

    return (
        <div className={`bg-dark row align-items-center container-component justify-content-center main-form flex-column vh-100`}>
            {console.log(post.title, post.body)}
            <Formik
            
            initialValues={{
                title: `${Object.keys(post).length > 0 ? post.title : ''}`, 
                message: `${Object.keys(post).length > 0 ? post.body : ''}`
            }}
            validationSchema={validate}
            onSubmit={values => {
               handleSubmit(values);
            }}
        >
            {
                formik => (
                    <div className={`bg-dark row align-items-center container-component w-50 post-form justify-content-center main-form flex-column vh-100`}>
                        <div className="login-form w-100">
                        <h1 className="text-white text-center">Post</h1>
                        <Form>
                            <TextField label="Title" name="title" type="text"
                             value={`${Object.keys(post).length > 0 ? post.title : ''}`}
                            />
                            <TextAreaField label="Message" name="message" type="text"
                             value={`${Object.keys(post).length > 0 ? post.body : ''}`}
                            />
                            <button className="btn btn-light mt-3" type="submit">{
                            
                            id === 0 ? 'Send Post' : 'Update Post'
                            }</button>
                        </Form>
                        </div>
                    </div>
                )
            }
        </Formik>
        </div>
    )
}
