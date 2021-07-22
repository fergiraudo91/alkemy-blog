import { useField, ErrorMessage } from 'formik';
import React from 'react';


export const TextAreaField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <textarea className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} autoComplete="off"
            {...field} {...props}></textarea>
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}