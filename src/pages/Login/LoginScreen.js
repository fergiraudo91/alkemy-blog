import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../../components/UI/TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';


export const LoginScreen = () => {
    const dispatch = useDispatch();

    const validate = Yup.object({
        mail: Yup.string().email('It must to be a valid email')
        .required('Email is Required'),
        password: Yup.string().min(5, 'It must to have 5 characters at least')
            .required('Passsword is required!')
    });
    const handleSubmit = (values) => {
        const {mail, password} = values;
        dispatch(startLogin(mail, password));
        
    }
    return (
        <Formik
            initialValues={{
                mail: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {
                formik => (
                    <div className={`bg-dark row align-items-center container-component justify-content-center main-form flex-column vh-100`}>
                        <div className="login-form">
                        <h1 className="text-white text-center">LogIn</h1>
                        <Form>
                            <TextField label="Email" name="mail" type="email" />
                            <TextField label="Password" name="password" type="password" />
                            <button className="btn btn-light mt-3" type="submit">Login</button>
                        </Form>
                        </div>
                    </div>
                )
            }
        </Formik>
    )
}
